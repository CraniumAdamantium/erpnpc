<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Company as ModelCompany;
use App\Models\CoinCompany as ModelCoinCompany;
use App\Models\Account;
use Illuminate\Support\Facades\Auth;

class Company extends Controller
{
  public function view()
  {
    return Inertia::render('Crud-Company');
  }
  public function read()
  {
    $users = User::where('id_user', Auth::user()->id_user)->where('state', 1)->with(['companies' => function ($query) {
      $query->where('status', 1);
    }])->first();
    return response()->json(['suc   cess' => true, 'data' => $users]);
  }

  public function create(Request $request)
  {
    $val = $request->validate(
      [
        'name' => 'required|string|min:2|max:50',
        'nit' => 'required|string|min:3|max:30|unique:companies,nit',
        'initials' => 'required|string|min:2|max:15|unique:companies,initials',
        'phone' => 'string|min:3|max:8',
        'email' => 'email|unique:companies,email',
        'address' => 'string|min:3|max:255',
        'level' => 'required|numeric|min:3|max:7',
        'id_coin' => 'required',
        /* 'id_user' => 'numeric|exists:users,id_user', */
        /* 'status' => 'required', */
      ]
    );
    $val['status'] = 1;
    $val['id_user'] = Auth::user()->id_user;
    /* Validating if Company name is already taken*/
    $checkName = ModelCompany::where('name', $request->name)->where('status', 1)->get()->count();
    if ($checkName > 0) {
      return response()->json(['success' => false, 'message' => "El nombre ya está tomado", "errors" => ['name' => ['El nombre ya está tomado.']]], 400);
    }
    $created = ModelCompany::create($val);
    //Getting last created ID
    $lastId = $created->id_company;
    ModelCoinCompany::create([
      'id_user' => Auth::user()->id_user,
      'active' => 1,
      'id_company' => $lastId,
      'id_maincoin' => $request->id_coin,
    ]);

    /* Now we create 5 principal accounts for the company
          Which are 1.- Activo
                    2.- Pasivo
                    3.- Patrimonio
                    4.- Ingresos
                    5.- Egresos
                    5.1 Costos
                    5.2 Gastos
        */
    function generateZeros($number, $initial, $changeSecond = null)
    {
      $codeString = '';
      for ($i = 0; $i < $number; $i++) {
        if ($i == 0) {
          $codeString .= $initial;
        } else {
          if ($changeSecond != null && $i == 1) {
            $codeString .= $changeSecond;
          } else {
            $codeString = $codeString . '0';
          }
        }
        if ($i != $number - 1) {
          $codeString = $codeString . '.';
        }
      }

      return $codeString;
    }
    //Activo
    Account::create([
      'code' => generateZeros($request->level, 1),
      'name' => "Activo",
      'type' => 1,
      'id_parent_account' => null,
      'id_company' => $lastId,
      'id_user' => Auth::user()->id_user,
      'level' => 1,
    ]);
    //Pasivo
    Account::create([
      'code' => generateZeros($request->level, 2),
      'name' => "Pasivo",
      'type' => 1,
      'id_parent_account' => null,
      'id_company' => $lastId,
      'id_user' => Auth::user()->id_user,
      'level' => 1,
    ]);
    //Patrimonio
    Account::create([
      'code' => generateZeros($request->level, 3),
      'name' => "Patrimonio",
      'type' => 1,
      'id_parent_account' => null,
      'id_company' => $lastId,
      'id_user' => Auth::user()->id_user,
      'level' => 1,
    ]);
    //Ingresos
    Account::create([
      'code' => generateZeros($request->level, 4),
      'name' => "Ingresos",
      'type' => 1,
      'id_parent_account' => null,
      'id_company' => $lastId,
      'id_user' => Auth::user()->id_user,
      'level' => 1,
    ]);
    //Egresos
    $egresos = Account::create([
      'code' => generateZeros($request->level, 5),
      'name' => "Egresos",
      'type' => 1,
      'id_parent_account' => null,
      'id_company' => $lastId,
      'id_user' => Auth::user()->id_user,
      'level' => 1,
    ]);
    //Costos
    Account::create([
      'code' => generateZeros($request->level, 5, 1),
      'name' => "Costos",
      'type' => 1,
      'id_parent_account' => $egresos->id_account,
      'id_company' => $lastId,
      'id_user' => Auth::user()->id_user,
      'level' => 2,
    ]);
    //Gastos
    Account::create([
      'code' => generateZeros($request->level, 5, 2),
      'name' => "Gastos",
      'type' => 1,
      'id_parent_account' => $egresos->id_account,
      'id_company' => $lastId,
      'id_user' => Auth::user()->id_user,
      'level' => 2,
    ]);
    return response()->json(['success' => true]);
  }
  public function update(Request $request)
  {

    $val = $request->validate([
      'id_company' => 'required|exists:companies,id_company',
      'name' => 'required|string|min:2|max:50',
      'nit' => 'required|string|min:3|max:30|unique:companies,nit,' . $request->id_company . ',id_company',
      'initials' => 'required|string|min:2|max:15|unique:companies,initials,' . $request->id_company . ',id_company',
      'level' => 'required|numeric|min:3|max:7',
      'phone' => 'string|min:3|max:8',
      'email' => 'email|unique:companies,email,' . $request->id_company . ',id_company',
      'address' => 'string|min:3|max:255',
      /* 'id_user' => 'numeric|exists:users,id_user', */
      /* 'status' => 'required', */
    ]);
    /* Validating if Company name is already taken*/
    $checkName = ModelCompany::where('name', $request->name)->where('id_company', '!=', $request->id_company)->where('status', 1)->get()->count();
    if ($checkName > 0) {
      return response()->json(['success' => false, 'message' => "El nombre ya está tomado.", "errors" => ['name' => ['El nombre ya está tomado.']]], 400);
    }
    /* Validation of data, if it's not set, then set it to null */
    (isset($val['level'])) ? $val['level'] = $val['level'] : $val['level'] = null;
    (isset($val['phone'])) ? $val['phone'] = $val['phone'] : $val['phone'] = null;
    (isset($val['email'])) ? $val['email'] = $val['email'] : $val['email'] = null;
    (isset($val['address'])) ? $val['address'] = $val['address'] : $val['address'] = null;
    $empresa = ModelCompany::findOrFail($request->id_company);
    if (Auth::user()->id_user != $empresa->first()->id_user) {
      return response()->json(['success' => false, 'message' => 'No tienes permisos para editar esta empresa'], 400);
    }
    $data = [];
    foreach ($val as $key => $value) {
      $data[$key] = $value;
    }
    $empresa->update($data);
    //Update coincompany
    $coincompany = ModelCoinCompany::where('id_company', $request->id_company);
    if ($coincompany->count() > 1) {
      return response()->json(['success' => true]); //Not updating anyway
    }
    $coincompany->first()->update([
      'id_maincoin' => $request->id_coin,
    ]);
    return response()->json(['success' => true]);
  }
  public function softDelete(Request $request)
  {
    $request->validate([
      'id_company' => 'required|exists:companies,id_company'
    ]);
    ModelCompany::where('id_company', $request->id_company)->update(['status' => 0]);
    return response()->json(['success' => true]);
  }
}
