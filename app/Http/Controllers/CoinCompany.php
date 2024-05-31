<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\Company;
use App\Models\CoinCompany as ModelCoinCompany;

class CoinCompany extends Controller
{
    public function view($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        if ($exists) {
            return Inertia::render('Crud-ExchangeRate');
        }
        return Redirect::route('companies');
    }
    public function create(Request $request)
    {
        $company = Company::findOrFail($request->id_company);
        $val = $request->validate(
            [
                'exchange' => 'required|numeric',
                'id_company' => 'required',
                'id_alternativecoin' => 'required|numeric',
            ]
        );
        //Now add id_User and id_maincoin to the request
        $val['id_user'] = Auth::user()->id_user;
        //Get base main coin
        $mainCoin = ModelCoinCompany::where('active', 1)->where('id_company', $val['id_company'])->first()->id_maincoin;
        $val['id_maincoin'] = $mainCoin;
        //Finally status
        $val['active'] = 1;
        //Now validate that the last alternative is not the same exchange
        //Round exchange
        $val['exchange'] = round($val['exchange'], 2);
        $lastExchange = ModelCoinCompany::where('id_company', $val['id_company'])
            ->where('id_alternativecoin', $val['id_alternativecoin'])
            ->where('active', 1) //This to validate if it's the active one
            ->orderBy('id_coincompany', 'desc')->first();
        if ($lastExchange) {
            if ($lastExchange->exchange == $val['exchange']) {
                return response()->json(['success' => false, 'message' => "El cambio es el mismo.", "errors" => ['El cambio es el mismo.']], 400);
            }
        }
        //Now turn off all active exchanges
        ModelCoinCompany::where('active', 1)->where('id_company', $val['id_company'])->update(['active' => 0]);
        $created = ModelCoinCompany::create($val);
        return response()->json(['success' => true]);
    }
    public function update(Request $request)
    {
        $request->validate(
            [
                'exchange' => 'required|number',
                'id_alternativecoin' => 'required|number',
            ]
        );
        $updated = ModelCoinCompany::findOrFail($request->id_coincompany);
        $updated->update([
            'exchange' => $request->exchange,
            'id_alternativecoin' => $request->alternativecoin
        ]);
        return response()->json(['success' => true]);
    }
    //Get coincompany by id company
    public function getByCompanyId(Request $request)
    {

        $coincompany = ModelCoinCompany::where('id_company', $request->id_company)
            ->where('coincompanies.id_user', Auth::user()->id_user)
            ->timeIsMoney()
            ->orderBy('coincompanies.created_at', 'desc')
            ->get();
        return response()->json(['success' => true, 'coins' => $coincompany]);
    }
}
