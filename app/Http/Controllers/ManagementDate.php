<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

use App\Models\Company;
use App\Models\ManagementDate as ManagementDateModel;
use App\Models\Period as ManagementPeriod;



class ManagementDate extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'name' => 'required|string|max:20|min:2',
            'id_company' => 'required|exists:companies,id_company'
        ]);
        /* Validating if ManagementDate name is already taken*/
        $checkName = ManagementDateModel::where('name', $request->name)->where('id_company', $request->id_company)->get()->count();
        if ($checkName > 0) {
            return response()->json(['success' => false, 'message' => "El nombre de la gestión ya está tomado.", 'type' => 1], 400);
        }
        /* Validating if the logged user belongs to the company */
        $company = Company::where('id_company', $request->id_company)->where('id_user', Auth::user()->id_user)->get()->count();
        if ($company == 0) {
            return response()->json(['success' => false], 400);
        }
        /* Validating there are no more than 2 ManagementDate open for this company */
        $validate2 = ManagementDateModel::where('status', 1)->where('id_company', $request->id_company)->get()->count();
        if ($validate2 >= 2) {
            return response()->json(['success' => false, 'message' => "Hay 2 gestiones abiertas.", 'type' => 1], 400);
        }
        /* Validating overlap date  */
        $nsolapa = ManagementDateModel::where('id_company', $request->id_company)->where(function ($query) use ($request) {
            $query->whereBetween('start_date', [$request->start_date, $request->end_date])->orWhereBetween('end_date', [$request->start_date, $request->end_date]);
        })->get()->count();
        if ($nsolapa > 0) {
            return response()->json(['success' => false, 'message' => "Existe solapamiento con otra gestión.", 'type' => 1], 400);
        }
        //CREATE
        ManagementDateModel::create([
            'name' => $request->name,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'id_user' => Auth::user()->id_user,
            'id_company' => $request->id_company,
            'status' => 1
        ]);
        return response()->json(['success' => true, 'message' => "Gestion creada con éxito."]);
    }
    public function view($company)
    {
        /* We validate that the company exists and that it belongs to the user */
        $exists = Company::where('name', urldecode($company))
            ->where('id_user', Auth::user()->id_user)
            ->where('status', 1)->first();
        if ($exists) {
            return Inertia::render('Crud-ManagementDate');
        }
        /* Else we redirect to companies */
        return Redirect::route('companies');
    }
    public function read($company)
    {
        /* Listing all the date managements that belongs to the company where the user is */
        /* $management_dates = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->with(['management_dates' => function ($query) {
            $query->where('status', 1);
        }])->first(); */
        $management_dates = Company::where('name', urldecode($company))
            ->where('status', 1)
            ->where('id_user', Auth::user()->id_user)
            ->with(['management_dates' => function ($query) {
                $query->orderBy('start_date');
            }])->first();
        return response()->json(['success' => true, 'company' => $management_dates]);
    }
    public function update(Request $request)
    {
        $request->validate([
            'id_management' => 'required',
            'name' => 'required|string|max:100|min:2',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date'
        ]);
        $updated = ManagementDateModel::findOrFail($request->id_management);
        /*Validating if the ManagementDate name is already taken*/
        $checkName = ManagementDateModel::where('name', $request->name)->where('id_management', "!=", $request->id_management)->where('id_company', $updated->id_company)->get()->count();
        if ($checkName > 0) {
            return response()->json(['success' => false, 'message' => "El nombre de la gestión ya está tomado.", 'type' => 1], 400);
        }
        /* Validating user */
        if ($updated->id_user != Auth::user()->id_user) {
            return response()->json(['success' => false], 400);
        }
        /* Validating overlap date */
        $nsolapa = ManagementDateModel::where('id_company', $updated->id_company)->where('id_management', '!=', $request->id_management)->where(function ($query) use ($request) {
            $query->whereBetween('start_date', [$request->start_date, $request->end_date])->orWhereBetween('end_date', [$request->start_date, $request->end_date]);
        })->get()->count();
        if ($nsolapa > 0) {
            return response()->json(['success' => false, 'message' => "Existe solapamiento con otra gestión.", 'type' => 1], 400);
        }
        /* Validating non overlap at update, from managementDate to Periods */
        $trash = ManagementPeriod::where('id_management', $updated->id_management)->where(function ($query) use ($request) {
            $query->where('start_date', '<', $request->start_date)->orWhere('end_date', '>', $request->end_date);
        })->get()->count();
        if ($trash >  0) {
            return response()->json(['success' => false, 'message' => "No puede modificar la gestión sobre un periodo dentro de ella.", 'type' => 1], 400);
        }
        //UPDATE
        $updated->update([
            'name' => $request->name,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date
        ]);
        return response()->json(['success' => true, 'message' => "Gestión actualizada con éxito."]);
    }
    public function delete(Request $request)
    {
        $request->validate([
            'id_management' => 'required'
        ]);
        $deleted = ManagementDateModel::findOrFail($request->id_management);
        /* Validating user */
        if ($deleted->id_user != Auth::user()->id_user) {
            return response()->json(['success' => false], 400);
        }
        /* Validating if there are periods inside the managementdate so it cannot be deleted*/
        $checkperiods = ManagementPeriod::where('id_management', $request->id_management)->get()->count();
        if ($checkperiods > 0) {
            return response()->json(['success' => false, 'message' => "No puede eliminar la gestión si esta tiene periodos"]);
        }
        //DELETE
        $deleted->delete();
        return response()->json(['success' => true, 'message' => "Gestión eliminada con éxito."]);
    }
}
