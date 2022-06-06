<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\Company;
use App\Models\CoinCompany as ModelCoinCompany;

class Report extends Controller
{
    public function readrtld($company)
    {

        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)
            ->with(['management_dates.periods'])->with('coin_companies.main_coin')->with('coin_companies.alternative_coin')->first();
        if ($exists) {
            return Inertia::render('ReportLD', [
                'company' => $exists,
                'user' => Auth::user()
            ]);
        }
        return Redirect::route('companies');
    }
    public function readrtlm($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)
        ->with(['management_dates.periods'])->with('coin_companies.main_coin')->with('coin_companies.alternative_coin')->first();
        if ($exists) {
            return Inertia::render('ReportLM', [
                'company' => $exists,
                'user' => Auth::user()
            ]);
        }
        return Redirect::route('companies');
    }
    public function readrtbi($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        if ($exists) {
            return Inertia::render('ReportBI');
        }
        return Redirect::route('companies');
    }
    public function readrtss($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        if ($exists) {
            return Inertia::render('ReportSS');
        }
        return Redirect::route('companies');
    }
}
