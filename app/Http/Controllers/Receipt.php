<?php

namespace App\Http\Controllers;

use App\Models\CoinCompany;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\Company as ModelCompany;
use App\Models\Receipt as ReceiptModel;
use App\Models\ManagementDate as ModelManagementDate;
use App\Models\Notes as ModelNotes;
use App\Models\Period as ModelPeriod;
use App\Models\ReceiptDetail;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class Receipt extends Controller
{
    public function viewEdit($id)
    {
        $receipt = ReceiptModel::where('id_receipt', $id)->where('id_user', Auth::user()->id_user)->with('details')->first();
        return Inertia::render('Crud-Receipt', ["data" => $receipt]);
    }
    public function create(Request $request)
    {
        DB::beginTransaction(); //Begin transaction to rollback if something goes wrong
        $val = $request->validate(
            [
                'serial_number' => 'required|numeric',
                'id_coin' => 'required|numeric',
                'comment' => 'required|string|min:2|max:200',
                'date' => 'required',
                'TC' => 'required',
                'receipt_type' => 'required',
                'details' => 'required|array'
            ]
        );
        /* Validating if the logged user belongs to the company */
        $company = ModelCompany::where('id_company', $request->id_company)
            ->where('id_user', Auth::user()->id_user)->get()->count();
        if ($company == 0) {
            return response()->json(['success' => false], 400);
        }
        /* Validating if the date is inside a period inside the company */
        $date = Carbon::parse($request->date)->format('Y-m-d');
        $isBetween = ModelManagementDate::where('management_dates.id_company', $request->id_company)
            ->join('periods', 'management_dates.id_management', '=', 'periods.id_management')
            ->where('management_dates.id_user', Auth::user()->id_user)
            ->where('management_dates.status', 1)
            ->where('periods.status', 1)
            ->where('periods.start_date', '<=', $date)
            ->where('periods.end_date', '>=', $date)
            ->count();
        if ($isBetween == 0 || $isBetween == '0') {
            return response()->json(['success' => false, 'message' => 'La fecha del comprobante no está dentro de un periodo abierto'], 400);
        }
        /* Validating if is the only "Apertura" receipt in the management date */
        /* Version que no supe arreglar 👍
            $apertura = ReceiptModel::where('receipts.id_company', $request->id_company)
            ->leftJoin('management_dates', function($leftJoin) use ($date){
                $leftJoin->on('management_dates.start_date', '<=', DB::raw(strval($date)))
                ->whereRaw('management_dates.end_date >= $date');
            })
            ->where('receipts.id_user', Auth::user()->id_user)
            ->where('receipts.receipt_type', 4)
            ->where('receipts.status', 1)
            ->where('management_dates.start_date', '>=', DB::raw('management_dates.start_date'))
            ->where('management_dates.end_date', '<=', DB::raw('management_dates.end_date'))
            ->count();
        */
        $apertura = DB::select(DB::raw(
            "SELECT COUNT(*)
            FROM receipts as rc
            LEFT JOIN management_dates as md
            ON rc.date BETWEEN md.start_date AND md.end_date AND md.id_company = rc.id_company
            WHERE rc.id_company = $request->id_company
            AND rc.receipt_type = 4
            AND rc.status = 1
            AND (md.start_date <= ('$date') AND md.end_date >= ('$date'))"
        ));
        if ($apertura[0]->{'COUNT(*)'} > 0 && $request->receipt_type == 4) {
            return response()->json(['success' => false, 'message' => 'Usted ya registro un comprobante de apertura en esta gestión'], 400);
        }
        $nuevo = ReceiptModel::create([
            'serial_number' => DB::raw('contarUltimoEmpresa(' . $request->id_company . ')'),
            'comment' => $request->comment,
            'date' => Carbon::parse($request->date),
            'TC' => $request->TC,
            'receipt_type' => $request->receipt_type,
            'id_company' => $request->id_company,
            'id_user' => Auth::user()->id_user,
            'id_coin' => $request->id_coin
        ]);
        try {
            /* ASk to database if id_coin is the main or the alternative */
            $coin = CoinCompany::where('id_company', $request->id_company)
                ->where('id_user', Auth::user()->id_user)
                ->where('active', 1)->first();
            function get_exchange($isMain, $number, $exchangeRate)
            {
                if ($isMain) {
                    return $number * $exchangeRate;
                }
                return $number / $exchangeRate;
            }
            /* Define true or false for isMain */
            $isMain = $coin->id_coin == $request->id_coin;
            $m_details = [];
            $debitSum = 0;
            $assetSum = 0;
            /* We also need the count */
            $count = 1;
            foreach ($request->details as $detail) {
                $m_details[] = [
                    'balance_debit' => $detail['balance_debit'],
                    'balance_assets' => $detail['balance_assets'],
                    /* Multiply or divide based on id_coin */
                    'balance_debitAlt' => get_exchange($isMain, $detail['balance_debit'], $coin->exchange),
                    'balance_assetsAlt' => get_exchange($isMain, $detail['balance_assets'], $coin->exchange),
                    'id_user' => Auth::user()->id_user,
                    'id_receipt' => $nuevo->id_receipt,
                    'id_account' => $detail['id_account'],
                    'comment' => $detail['comment'],
                    'number' => $count
                ];
                $count++;
                $debitSum = $debitSum + $detail['balance_debit'];
                $assetSum = $assetSum + $detail['balance_assets'];
            }
            if ($debitSum - $assetSum != 0) {
                DB::rollback();
                return response()->json(['success' => false, 'message' => 'Debe y Haber deben sumar 0.'], 400);
            }
            /* Finally create this garbage */
            ReceiptDetail::insert($m_details);
            DB::commit(); //If all goes well commit the changes
            return response()->json(['success' => true, 'message' => "Comprobante creado con éxito."]);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['success' => false, 'message' => $e->getMessage(), 'Rollback' => true], 400);
        }
    }
    public function delete(Request $request)
    {
        $request->validate([
            'serial' => 'required',
            'id_company' => 'required'
        ]);
        $deleted = ReceiptModel::where('serial_number',$request->serial)
        ->where('id_company',$request->id_company);
        /* Validating user */
        // if ($deleted->id_user != Auth::user()->id_user) {
        //     return response()->json(['success' => false], 400);
        // }
        //UPDATE
        $deleted->update([
            'status' => 2,
        ]);
        return response()->json(['success' => true, 'message' => "Comprobante anulado con éxito"]);
    }
    public function read($company)
    {
        $receipts = ModelCompany::where('companies.name', urldecode($company))
            ->where('companies.status', 1)
            ->where('companies.id_user', Auth::user()->id_user)
            ->with(['receipts' => function ($query) {
                $query->select(
                    'receipts.*',
                    ReceiptModel::raw('CONCAT(coins.name, " (", coins.initials, ")") as "name"')
                )
                    ->join('coins', 'receipts.id_coin', '=', 'coins.id_coin')
                    ->orderByDesc('serial_number');
            }])->first();
        return response()->json(['success' => true, 'company' => $receipts]);
    }
    public function viewTableReceipt($company)
    {
        $exists = ModelCompany::where('name', urldecode($company))
            ->where('id_user', Auth::user()->id_user)
            ->where('status', 1)->first();
        if ($exists) {
            return Inertia::render('CrudTable-Receipt');
        }
        return Redirect::route('companies');
    }
    public function viewCrudReceipt($company)
    {
        $exists = ModelCompany::where('name', urldecode($company))
            ->where('id_user', Auth::user()->id_user)
            ->where('status', 1)->first();
        if ($exists) {
            return Inertia::render('Crud-Receipt');
        }
        return Redirect::route('companies');
    }
    public function getLastserial_number(Request $response)
    {
        $lastID = ReceiptModel::join('companies', 'receipts.id_company', '=', 'companies.id_company')
            ->where('companies.id_company', $response->id_company)
            ->where('companies.id_user', Auth::user()->id_user)
            ->where('companies.status', 1)
            ->orderByDesc('serial_number')->get()->count();
        return response()->json(['success' => true, 'lastID' => $lastID]);
    }
    public function getNotes(Request $response){
        $esdeNota = ReceiptModel::join('notes', 'receipts.id_receipt', '=', 'notes.id_receipt')
        ->where('notes.id_receipt', $response->id_receipt)->get()->count();
        return response()->json(['success' => true, 'note' => $esdeNota]);
    }
}
