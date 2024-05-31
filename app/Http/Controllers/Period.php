<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequestValidator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Period as PeriodModel;
use APP\Models\Receipt as ModelReceipt;
use App\Models\ManagementDate;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class Period extends Controller
{
    public function read($id_management)
    {
        $periods = PeriodModel::where('id_management', $id_management)->where('id_user', Auth::user()->id_user)->orderBy('start_date')->get();
        return response()->json($periods);
    }
    public function readByCompany($id_company)
    {
        /* SELECT pr.*
        FROM periods as pr
        INNER JOIN management_dates as md
        ON md.id_management = pr.id_management AND md.id_company =  */
        $periods = DB::table('periods as pr')
            ->join('management_dates as md', function ($join) use ($id_company) {
                $join->on('md.id_management', '=', 'pr.id_management')
                    ->where('md.id_company', '=', $id_company);
            })
            ->where('pr.id_user', Auth::user()->id_user)
            ->orderBy('pr.start_date')
            ->get();

        return response()->json($periods);
    }
    public function delete(Request $request)
    {
        $request->validate([
            'id_period' => 'required',
            'id_user' => 'required',
            'id_company' => 'required',
            'start_date' => 'required',
            'end_date' => 'required'
        ]);
        // Validating if there are receipts inside a period
        $start_date = Carbon::createFromFormat('d/m/Y', $request->start_date)->format('Y-m-d');
        $end_date = Carbon::createFromFormat('d/m/Y', $request->end_date)->format('Y-m-d');
        $deleted = DB::select(DB::raw(
            "SELECT COUNT(*) FROM receipts as c
            WHERE c.id_user=1
            AND c.id_company=$request->id_company
            AND (c.date >= ('$start_date') AND c.date <= ('$end_date')) LIMIT 1;"
        ));
        if ($deleted[0]->{'COUNT(*)'} > 0) {
            return response()->json(['success' => false, 'message' => 'No puede modificar un periodo con un comprobante registrado']);
        }
        $period = PeriodModel::findOrFail($request->id_period);
        $period->delete();
        return response()->json(['success' => 'Periodo eliminado correctamente']);
    }
    public function create(Request $request)
    {
        $management = ManagementDate::findOrFail($request->id_management);
        $request->validate([
            'id_management' => 'required',
            'name' => 'required|string|max:20|min:2',
            'start_date' => 'required|date|after_or_equal:' . $management->start_date . '|before_or_equal:' . $management->end_date,
            'end_date' => 'required|date|after:start_date|before_or_equal:' . $management->end_date,
        ]);
        //Validating the user owns the management
        if ($management->id_user != Auth::user()->id_user) {
            return response()->json(['success' => false], 400);
        }
        //Validating if the period name is already taken
        if (PeriodModel::where('name', $request->name)->where('id_management', $request->id_management)->get()->count() > 0) {
            return response()->json(['success' => false, 'message' => 'El nombre del periodo ya está tomado.', 'type' => 1], 400);
        }
        /* Validating overlap date  */
        $nsolapa = PeriodModel::where('id_management', $request->id_management)->where(function ($query) use ($request) {
            $query->whereBetween('start_date', [$request->start_date, $request->end_date])->orWhereBetween('end_date', [$request->start_date, $request->end_date]);
        })->get()->count();
        if ($nsolapa > 0) {
            return response()->json(['success' => false, 'message' => "Existe solapamiento con otro periodo.", 'type' => 1], 400);
        }
        //CREATE
        PeriodModel::create([
            'name' => $request->name,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'id_user' => Auth::user()->id_user,
            'id_management' => $request->id_management,
            'status' => 1
        ]);
        return response()->json(['success' => true]);
    }
    public function update(Request $request)
    {
        $period = PeriodModel::findOrFail($request->id_period);
        $management = ManagementDate::findOrFail($period->id_management);
        $request->validate([
            'id_period' => 'required',
            'name' => 'required|string|max:20|min:2',
            'start_date' => 'required|date|after_or_equal:' . $management->start_date . '|before_or_equal:' . $management->end_date,
            'end_date' => 'required|date|after:start_date|before_or_equal:' . $management->end_date,
        ]);
        //Validating the user is owner of the management
        if ($management->id_user != Auth::user()->id_user) {
            return response()->json(['success' => false], 400);
        }
        //Validating if the period name is already taken
        $periodo = PeriodModel::where('name', $request->name)->where('id_management', $period->id_management)->first();
        if (isset($periodo) && $periodo->id_period != $request->id_period) {
            return response()->json(['success' => false, 'message' => 'El nombre del periodo ya está tomado.', 'type' => 1], 400);
        }
        //Validating overlap date
        $nsolapa = PeriodModel::where('id_management', $period->id_management)->where('id_period', '!=', $request->id_period)->where(function ($query) use ($request) {
            $query->whereBetween('start_date', [$request->start_date, $request->end_date])->orWhereBetween('end_date', [$request->start_date, $request->end_date]);
        })->get()->count();
        if ($nsolapa > 0) {
            return response()->json(['success' => false, 'message' => "Existe solapamiento con otro periodo.", 'type' => 1], 400);
        }
        // Validating if there are receipts inside a period
        $deleted = DB::select(DB::raw(
            "SELECT COUNT(*) FROM receipts as c
            WHERE c.id_user= 1
            AND c.id_company=$request->id_company
            AND (c.date >= ('$request->start_date') AND c.date <= ('$request->end_date')) LIMIT 1;"
        ));
        if ($deleted[0]->{'COUNT(*)'} > 0) {
            return response()->json(['success' => false, 'message' => 'No puede modificar un periodo con un comprobante registrado', 'type' => 1], 400);
        }
        //UPDATE
        $period->update([
            'name' => $request->name,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ]);
        return response()->json(['success' => true]);
    }
}
