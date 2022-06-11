<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class Reportes extends Controller
{
    public function estado_resultados()
    {
        $data = Company::with(['coin_companies' => function ($query) {
            $query->where('active', 1)->with(['main_coin' => function ($query) {
                $query->with(['receipts' => function ($query) {
                    $query->where('receipt_type', 1)->orWhere('receipt_type', 2)->with(['details' => function ($query) {
                        $query->with(['account' => function ($query) {
                            $query->where('name', 'Ingresos')->orWhere('name', 'Costos')->orWhere('name', 'Gastos');
                        }]);
                    }]);
                }])->first();
            }])->first();
        }])->first()->toArray();
        $sumA = 0;
        $sumB  = 0;
        foreach ($data['coin_companies'][0]['main_coin']['receipts'] as $key => $receipt) {
            foreach ($receipt['details'] as $key => $detail) {
                if ($receipt['receipt_type'] == 1) {
                    //dd($detail);
                    $sumA += ($detail['balance_assets']);
                } else {
                    $sumB += ($detail['balance_debit']);
                }
            }
        }

        //Ingresos 1 Egresos 2
        $data['coin_companies'][0]['main_coin']['total_ingresos'] = $sumA;
        $data['coin_companies'][0]['main_coin']['total_egresos'] = $sumB;

        return $data;
    }
}
