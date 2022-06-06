<?php

namespace App\Http\Controllers;

use App\Models\Account as ModelsAccount;
use App\Models\Account_config;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\Company;
use Illuminate\Support\Facades\DB;

class Account extends Controller
{
    public function view_config($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        if ($exists) {
            $exists->load('accounts', 'account_config');
            return Inertia::render('Crud-AccountConfig', [
                'company' => $exists,
                'userData' => Auth::user(),
            ]);
        }
        return Redirect::route('companies');
    }
    public function config_create(Request $request)
    {
        $request->validate([
            'integration' => 'required|boolean',
            'id_company' => 'required|exists:companies,id_company',
            'id_account_caja' => 'required|exists:accounts,id_account',
            'id_account_credito_f' => 'required|exists:accounts,id_account',
            'id_account_debito_f' => 'required|exists:accounts,id_account',
            'id_account_compras' => 'required|exists:accounts,id_account',
            'id_account_ventas' => 'required|exists:accounts,id_account',
            'id_account_it' => 'required|exists:accounts,id_account',
            'id_account_it_p' => 'required|exists:accounts,id_account',
        ]);
        //Delete all first
        Account_config::where('id_company', $request->id_company)->delete();
        //Create new
        Account_config::create([
            'id_company' => $request->id_company,
            'id_account_caja' => $request->id_account_caja,
            'id_account_credito_f' => $request->id_account_credito_f,
            'id_account_debito_f' => $request->id_account_debito_f,
            'id_account_compras' => $request->id_account_compras,
            'id_account_ventas' => $request->id_account_ventas,
            'id_account_it' => $request->id_account_it,
            'id_account_it_p' => $request->id_account_it_p,
            'integration' => $request->integration,
        ]);
        return back()->with('success', 'Configuración guardada correctamente');
    }

    public function view($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        if ($exists) {
            return Inertia::render('Crud-Account');
        }
        return Redirect::route('companies');
    }
    public function create(Request $request)
    {
        $company = Company::findOrFail($request->id_company);
        $request->validate(
            [
                'id_company' => 'required',
                'name' => 'required|string|min:2|max:20',
                'id_parent' => 'numeric'
            ]
        );
        //Validation to check if it's unique in this company
        $checkName = ModelsAccount::where('name', $request->name)->where('id_company', $request->id_company)->count();
        if ($checkName > 0) {
            return response()->json(['success' => false, 'message' => "El nombre ya está tomado", "errors" => ['name' => ['El nombre ya está tomado.']]], 400);
        }
        // =========== count how many parents does the id_parent have ========

        function countParents($id_node, $array, $count = 0)
        {
            //First we search the node
            $search = array_search($id_node, array_column($array, 'id_account'));
            if ($search) {
                //If the node has a parent, we search the parent
                if ($array[$search]['id_parent_account'] != null) {
                    $count++;
                    $count = countParents($array[$search]['id_parent_account'], $array, $count);
                }
            }
            //At the end, if we can't find the node, then return the count
            return $count;
        }
        function countSiblings($id_parent, $array)
        {
            $count = 0;
            foreach ($array as $key => $value) {
                if ($value['id_parent_account'] == $id_parent) {
                    $count++;
                }
            }
            return $count;
        }
        $nParents = "";
        $code = "";
        $accounts = ModelsAccount::where('id_company', $request->id_company)->get()->toArray();
        $nParents = countParents($request->id_parent, $accounts);
        if ($request->id_parent) {
            //Validating if number of parents is allowed

            if ($nParents + 1 >= $company->level) {
                return response()->json(['success' => false, 'message' => "El número de padres es mayor al nivel de la empresa", "errors" => ['id_parent' => ['Nivel de cuenta de la empresa alcanzado.']]], 400);
            }
            // =========== Creating code ==========
            $code = ModelsAccount::where('id_account', $request->id_parent)->first()->code; //We get parent code
            //We explode
            $code = explode(".", $code);
            //Based on number of parents from out parent, we determine the position and the change will be determined in the count of sibblings
            $code[$nParents == 0 ? 1 : $nParents + 1] = countSiblings($request->id_parent, $accounts) + 1;

            //Finally, we must verify if the code is ok to his position, if not, we must change the last number
            $lastCodeRawChildren = DB::select(DB::raw(' SELECT a.code
                                                FROM
                                                accounts AS a
                                                WHERE a.id_company = ' . $request->id_company . '
                                                AND a.id_parent_account = ' . $request->id_parent . '
                                                ORDER BY
                                                INET_ATON(SUBSTRING_INDEX(CONCAT(a.code,".0.0.0"),".",4)) DESC
                                                LIMIT 1;
                                                '));
            $lastCodeChildren = $lastCodeRawChildren[0]->code ?? "";
            $lastCodeChildren = explode(".", $lastCodeChildren);
            //If the code in position is not ok, we must change the last number based on the major code
            if ($lastCodeChildren[0] != "") {

                if ($lastCodeChildren[$nParents == 0 ? 1 : $nParents + 1] > $code[$nParents == 0 ? 1 : $nParents + 1]) {
                    $code[$nParents == 0 ? 1 : $nParents + 1] = ($lastCodeChildren[$nParents == 0 ? 1 : $nParents + 1] + 1);
                }
            }

            $code = implode(".", $code);
        } else {
            $n = countSiblings(null, $accounts);
            $lastCodeRaw = DB::select(DB::raw(' SELECT a.code
                                                FROM accounts AS a
                                                WHERE a.id_company = ' . $request->id_company . '
                                                ORDER BY
                                                INET_ATON(SUBSTRING_INDEX(CONCAT(a.code,".0.0.0"),".",4)) DESC
                                                LIMIT 1;
                                                '));
            $lastCode = $lastCodeRaw[0]->code ?? "";
            if ($lastCode != "") {
                $lastCode = explode(".", $lastCode);
                //We get the first element
                $lastCode = ($lastCode[0]);
                //We add 1 to the first element
                $lastCode = $lastCode + 1;
            }

            //We implode to get first element

            for ($i = 0; $i < $company->level; $i++) {

                if ($i == 0) {

                    if ($lastCode != "") {
                        $code .= $lastCode;
                    } else {

                        $code .= $n + 1;
                    }
                } else {
                    $code .= ".0";
                }
            }
        }
        //We compare the latest with the actual


        //Finally we create the new account
        ModelsAccount::create([
            'id_company' => $request->id_company,
            'name' => $request->name,
            'id_parent_account' => $request->id_parent ? $request->id_parent : null,
            'code' => $code,
            'level' => $request->id_parent ? $nParents + 2 : 1,
            'type' => 1,
            'id_user' => Auth::user()->id_user
        ]);
        //Then response ok
        return response()->json(['success' => true, 'message' => "Cuenta creada correctamente"]);
    }
    public function update(Request $request)
    {
        $request->validate(
            [
                'id_account' => 'required',
                'name' => 'required|string|min:2|max:20',
                'id_company' => 'required',
            ]
        );
        $update = ModelsAccount::findOrFail($request->id_account);
        if ($update->id_user != Auth::user()->id_user) {
            return response()->json(['success' => false, 'message' => "No tienes permisos para editar esta cuenta", "errors" => ['id_account' => ['No tienes permisos para editar esta cuenta.']]], 400);
        }
        //Validate if it's unique in the company
        $checkName = ModelsAccount::where('name', $request->name)->where('id_company', $request->id_company)->where('id_account', '!=', $request->id_account)->count();
        if ($checkName > 0) {
            return response()->json(['success' => false, 'message' => "El nombre ya está tomado", "errors" => ['name' => ['El nombre ya está tomado.']]], 400);
        }
        //Then update
        $update->name = $request->name;
        $update->save();
        return response()->json(['success' => true, 'message' => "Cuenta actualizada correctamente"]);
    }
    public function delete(Request $request)
    {
        $request->validate(
            [
                'id_account' => 'required',
            ]
        );
        $delete = ModelsAccount::findOrFail($request->id_account);
        if ($delete->id_user != Auth::user()->id_user) {
            return response()->json(['success' => false, 'message' => "No tienes permisos para eliminar esta cuenta", "errors" => ['id_account' => ['No tienes permisos para eliminar esta cuenta.']]], 400);
        }
        $searchChildren = ModelsAccount::where('id_parent_account', $delete->id_account)->count();
        if ($searchChildren > 0) {
            return response()->json(['success' => false, 'message' => "No se puede eliminar esta cuenta porque tiene hijos", "errors" => ['id_account' => ['No se puede eliminar esta cuenta porque tiene hijos.']]], 400);
        }
        $delete->delete();
        return response()->json(['success' => true, 'message' => "Cuenta eliminada correctamente"]);
    }
    public function read($company)
    {
        /* Listing all the date managements that belongs to the company where the user is */
        $accounts = Company::where('name', urldecode($company))->where('status', 1)->where('id_user', Auth::user()->id_user)->with(['accounts' => function ($query) {
            $query->orderByRaw('inet_truchon(code)');
        }])->first();
        /* This crap has a O complexity in worst case of O(n^3), what a crap, but it works 👍 */
        return response()->json(['success' => true, 'company' => $accounts]);
    }
}
