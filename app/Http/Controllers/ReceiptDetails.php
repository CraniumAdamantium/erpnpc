<?php

namespace App\Http\Controllers;

use App\Models\Receipt;
use App\Models\ReceiptDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ReceiptDetails extends Controller
{
    public function read($id_receipt)
    {
        $receipt = ReceiptDetail::where('id_receipt', $id_receipt)->where('receiptdetails.id_user', Auth::user()->id_user)
            ->leftjoin('accounts as acc', 'receiptdetails.id_account', '=', 'acc.id_account')
            ->select('receiptdetails.*', DB::raw("CONCAT(acc.code, ' - ', acc.name) as name_account"))
            ->get();
        return response()->json($receipt);
    }
    public function create(Request $request)
    {
        $request->validate(
            [
                'number' => 'required|numeric',
                'comment' => 'required|string|min:2|max:50',
                'balance_debit' => 'required|numeric',
                'balance_assets' => 'required|numeric',
                'balance_debitAlt' => 'required|numeric',
                'balance_assetsAlt' => 'required|numeric',
                //'id_user' => 'required|numeric',
                'id_receipt' => 'required|numeric',
                'id_account' => 'required|numeric'
            ]
        );
        ReceiptDetail::create([
            'number' => $request->number,
            'comment' => $request->comment,
            'balance_debit' => $request->balance_debit,
            'balance_assets' => $request->balance_assets,
            'balance_debitAlt' => $request->balance_debitAlt,
            'balance_assetsAlt' => $request->balance_assetsAlt,
            'id_user' => Auth::user()->id_user,
            'id_receipt' => $request->id_receipt,
            'id_account' => $request->id_account
        ]);
    }
}
