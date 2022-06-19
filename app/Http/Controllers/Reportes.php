<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Company;
use App\Models\ManagementDate;
use App\Models\Receipt;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Reportes extends Controller
{
    function findParent($array, $id_account)
    {
        /* Recibe el id_parent_account que es el $id_account aqui */
        foreach ($array as $key => $value) {
            if ($value['id_account'] == $id_account) {
                return $value;
            }
        }
        return null;
    }
    function findChild($array, $id_account)
    {
        /* Recibe el id_account (De la cuenta), y busca si el id_paren_account de algun objeto es igual a esa cuenta */
        foreach ($array as $key => $value) {
            if ($value['id_parent_account'] == $id_account) {
                return $value;
            }
        }
        return null;
    }
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
    public function balance_general(Request $request)
    {
        /* Validar */
        $request->validate([
            'id_company' => 'required',
            'id_gestion' => 'required',
            'alternative' => 'required|boolean',

        ]);
        /* Select company con first */
        $company = Company::where('id_company', $request->id_company)->with(['coin_companies' => function ($query) {
            $query->where('active', 1)->with('main_coin', 'alternative_coin');
        }])->first();
        $company->moneda = $request->alternative ? $company->coin_companies[0]['alternative_coin']['name']
            : $company->coin_companies[0]['main_coin']['name'];

        /* Select gestion con first */
        $gestion = ManagementDate::where('id_management', $request->id_gestion)->first();
        /* Agarrar los recibos donde la compañia sea id_company y la fecha este entre la gestión previa */
        $receipts = Receipt::where('id_company', $request->id_company)->where('status', 1)->whereBetween('date', [$gestion->start_date, $gestion->end_date])->with('coin')->get();
        //I neeed the ids
        $ids = [];
        foreach ($receipts as $key => $receipt) {
            $ids[] = $receipt->id_receipt;
        }
        //Donde el code sea LIKE '1%' o sea LIKE '2%' o sea LIKE '3%'
        /* Se necesita un AND así que se modifico */
        $data = Account::where('id_company', $request->id_company)->where(function ($q) {
            $q->where('code', 'LIKE', '1%')->orWhere('code', 'LIKE', '2%')->orWhere('code', 'LIKE', '3%');
        })->orderByRaw('INET_TRUCHON(code)')
            ->withSum(['receiptsdetails' => fn ($query) => $query->whereIn('id_receipt', $ids)], $request->alternative ? 'balance_debitAlt' : 'balance_debit')->withSum(['receiptsdetails' => fn ($query) => $query->whereIn('id_receipt', $ids)], $request->alternative ? 'balance_assetsAlt' : 'balance_assets')->get()->toArray();

        /* Convertimos a simplemente balance_assets o balance_debit si es que el alternativo está seteado */
        if ($request->alternative) {
            foreach ($data as $key => $value) {

                $data[$key]['receiptsdetails_sum_balance_assets'] = $value['receiptsdetails_sum_balance_assets_alt'];
                $data[$key]['receiptsdetails_sum_balance_debit'] = $value['receiptsdetails_sum_balance_debit_alt'];
                /* Eliminamos el otro */
                unset($data[$key]['receiptsdetails_sum_balance_assets_alt']);
                unset($data[$key]['receiptsdetails_sum_balance_debit_alt']);
            }
            /* Reacomodamos valores */
        }
        /*
      El resultado de $data es un array con las cuentas en el siguiente formato:
        {
          "id_account": 8,
          "code": "1.1.0",
          "name": "Activo Corriente",
          "level": 2,
          "id_parent_account": 1,
          "type": 1,
          "id_company": 1,
          "id_user": 1,
          "receiptsdetails_sum_balance_debit": null,
          "receiptsdetails_sum_balance_assets": null
        },
      La suma jamás deberá ser null, debe ser 0 o mayor, además, las cuentas hijas deben sumarse a su padre y así respectivamente.
    */
        /* Hay que hacer un algoritmo que sume de hijos a padres */
        //Se copia el array primero
        $count = 0;
        $copy = $data;
        //Se recorre el array
        while (count($copy) > 0) { //Mientras no hayamos eliminado a todos
            /* Hay varios tipos de nodos
      1.- Tiene hijo y tiene padre ->Esto no se usa, se esquiva con la condición 3
      2.- Solo tiene hijo -> no se usa, siempre chequeamos padre
      3.- Solo tiene padre -> esto usamos
      4.- No tiene hijo ni padre -> solo se usa para eliminar el final
      Primero tenemos que buscar a todos los nodos que solo tengan padre y no hijos
    */
            $count++; //Ignorar
            foreach ($copy as $key => $account) {
                if ($account['id_parent_account'] == null) {
                    //Si no tiene padre, entonces es un nodo raiz
                    //Comprobamos que ya no tenga hijos que le sumen y lo borramos
                    if ($this->findChild($copy, $account['id_account']) == null) {
                        unset($copy[$key]);
                    }
                }
                if ($account['id_parent_account'] != null) {
                    /*
             Si tiene padre, entonces es un nodo hijo y tenemos que buscar a su padre
             Pero además, debemos saber si tiene hijos este nodo
             */
                    $parent = $this->findParent($copy, $account['id_parent_account']);
                    $child = $this->findChild($copy, $account['id_account']);
                    if ($child == null) {
                        //Si no tiene hijos, entonces podemos sumar sus valores a su padre y eliminarlo
                        /* Pero como estamos en el copy y no en el data, la posición del array cambia así que buscamos el parent y child en data */
                        $parentPos = array_search($parent['id_account'], array_column($data, 'id_account'));
                        $actualPos = array_search($account['id_account'], array_column($data, 'id_account'));
                        $data[$parentPos]['receiptsdetails_sum_balance_debit'] += $data[$actualPos]['receiptsdetails_sum_balance_debit'];
                        $data[$parentPos]['receiptsdetails_sum_balance_assets'] += $data[$actualPos]['receiptsdetails_sum_balance_assets'];
                        unset($copy[$key]);
                    }
                    //Si tiene hijos, no podemos iterar sobre el todavía, porque no sabemos cuanto suman sus hijos
                }
            }
        }
        /* Parse a todos los números de receiptsdetails_sum_balance_debit y ademas obtengo el abs del debe - */
        /* Resto todos los debits con assets */
        foreach ($data as $key => $account) {
            $val = abs($account['receiptsdetails_sum_balance_debit'] - $account['receiptsdetails_sum_balance_assets']);
            $data[$key]['total'] = number_format($val, 2, '.', '') == 0 ? "" : number_format($val, 2, '.', '');
            unset($data[$key]['receiptsdetails_sum_balance_debit']);
            unset($data[$key]['receiptsdetails_sum_balance_assets']);
        }
        /* Ahora quiero que 2.0.0 y 3.0.0 se sumen y además ponerlos en uno solo */
        $keyPasivo = array_search('2.0.0', array_column($data, 'code'));
        $keyPatrimoio = array_search('3.0.0', array_column($data, 'code'));
        $data[$keyPasivo]['total'] = number_format((float)$data[$keyPasivo]['total'] + (float) $data[$keyPatrimoio]['total'], 2);
        $data[$keyPasivo]['code'] = "2.0.0 PASIVO Y 3.0.0 PATRIMONIO";
        $data[$keyPasivo]['name'] = "";
        unset($data[$keyPatrimoio]); //Elimina el patrimonio
        /* Reseteamos el index de cada uno */
        $data = array_values($data);
        $company->nombre_gestion = $gestion->name;
        $company->fecha_inicio_ges = Carbon::parse($gestion->start_date)->format('d/m/Y');
        $company->fecha_fin_ges = Carbon::parse($gestion->end_date)->format('d/m/Y');
        $company->fecha_reporte = now()->format('d/m/Y');
        $company->usuario = $request->usuario ?  $request->usuario : 'Anonimo';
        $company->cuentas = $data;
        return response()->json($company);
        //return Inertia::render('Accounts/BalanceGeneral', $company);
    }
    public function balance_inicial(Request $request)
    {
        /* Validar */
        $request->validate([
            'id_company' => 'required',
            'id_gestion' => 'required',
        ]);
        /* Select company con first */
        $company = Company::findOrFail($request->id_company)->first();
        /* Select gestion con first */
        $gestion = ManagementDate::where('id_management', $request->id_gestion)->first();
        /* Agarrar los recibos donde la compañia sea id_company y la fecha este entre la gestión previa */
        $receipts = Receipt::where('id_company', $request->id_company)->where('status', 1)->whereBetween('date', [$gestion->start_date, $gestion->end_date])->get();
        //I neeed the ids
        $ids = [];
        foreach ($receipts as $key => $receipt) {
            $ids[] = $receipt->id_receipt;
        }
        //Donde el code sea LIKE '1%' o sea LIKE '2%' o sea LIKE '3%'
        $data = Account::where('id_company', $request->id_company)->where('code', 'LIKE', '1%')->orWhere('code', 'LIKE', '2%')->orWhere('code', 'LIKE', '3%')->orderByRaw('INET_TRUCHON(code)')
            ->withSum(['receiptsdetails' => fn ($query) => $query->whereIn('id_receipt', $ids)], 'balance_debit')->withSum(['receiptsdetails' => fn ($query) => $query->whereIn('id_receipt', $ids)], 'balance_assets')->get()->toArray();
        /*
      El resultado de $data es un array con las cuentas en el siguiente formato:
        {
          "id_account": 8,
          "code": "1.1.0",
          "name": "Activo Corriente",
          "level": 2,
          "id_parent_account": 1,
          "type": 1,
          "id_company": 1,
          "id_user": 1,
          "receiptsdetails_sum_balance_debit": null,
          "receiptsdetails_sum_balance_assets": null
        },
      La suma jamás deberá ser null, debe ser 0 o mayor, además, las cuentas hijas deben sumarse a su padre y así respectivamente.
    */
        /* Hay que hacer un algoritmo que sume de hijos a padres */
        //Se copia el array primero
        $count = 0;
        $copy = $data;
        //Se recorre el array
        while (count($copy) > 0) { //Mientras no hayamos eliminado a todos
            /* Hay varios tipos de nodos
      1.- Tiene hijo y tiene padre ->Esto no se usa, se esquiva con la condición 3
      2.- Solo tiene hijo -> no se usa, siempre chequeamos padre
      3.- Solo tiene padre -> esto usamos
      4.- No tiene hijo ni padre -> solo se usa para eliminar el final
      Primero tenemos que buscar a todos los nodos que solo tengan padre y no hijos
    */
            $count++; //Ignorar
            foreach ($copy as $key => $account) {
                if ($account['id_parent_account'] == null) {
                    //Si no tiene padre, entonces es un nodo raiz
                    //Comprobamos que ya no tenga hijos que le sumen y lo borramos
                    if ($this->findChild($copy, $account['id_account']) == null) {
                        unset($copy[$key]);
                    }
                }
                if ($account['id_parent_account'] != null) {
                    /*
             Si tiene padre, entonces es un nodo hijo y tenemos que buscar a su padre
             Pero además, debemos saber si tiene hijos este nodo
             */
                    $parent = $this->findParent($copy, $account['id_parent_account']);
                    $child = $this->findChild($copy, $account['id_account']);
                    if ($child == null) {
                        //Si no tiene hijos, entonces podemos sumar sus valores a su padre y eliminarlo
                        /* Pero como estamos en el copy y no en el data, la posición del array cambia así que buscamos el parent y child en data */
                        $parentPos = array_search($parent['id_account'], array_column($data, 'id_account'));
                        $actualPos = array_search($account['id_account'], array_column($data, 'id_account'));
                        $data[$parentPos]['receiptsdetails_sum_balance_debit'] += $data[$actualPos]['receiptsdetails_sum_balance_debit'];
                        $data[$parentPos]['receiptsdetails_sum_balance_assets'] += $data[$actualPos]['receiptsdetails_sum_balance_assets'];
                        unset($copy[$key]);
                    }
                    //Si tiene hijos, no podemos iterar sobre el todavía, porque no sabemos cuanto suman sus hijos
                }
            }
        }
        /* Ahora quiero que 2.0.0 y 3.0.0 se sumen y además ponerlos en uno solo */
        $keyPasivo = array_search('2.0.0', array_column($data, 'code'));
        $keyPatrimoio = array_search('3.0.0', array_column($data, 'code'));
        $data[$keyPasivo]['receiptsdetails_sum_balance_debit'] += $data[$keyPatrimoio]['receiptsdetails_sum_balance_debit'];
        $data[$keyPasivo]['receiptsdetails_sum_balance_assets'] += $data[$keyPatrimoio]['receiptsdetails_sum_balance_assets'];
        $data[$keyPasivo]['code'] = "2.0.0 PASIVO Y 3.0.0 PATRIMONIO";
        $data[$keyPasivo]['name'] = "";
        unset($data[$keyPatrimoio]);
        /* Reseteamos el index de cada uno */
        $data = array_values($data);
        /* Parse a todos los números de receiptsdetails_sum_balance_debit y receiptsdetails_sum_balance_assets para que no tengan más de 2 decimasles */
        foreach ($data as $key => $account) {
            $data[$key]['receiptsdetails_sum_balance_debit'] = number_format($account['receiptsdetails_sum_balance_debit'], 2, '.', '') == 0 ? "" : number_format($account['receiptsdetails_sum_balance_debit'], 2, '.', '');
            $data[$key]['receiptsdetails_sum_balance_assets'] = number_format($account['receiptsdetails_sum_balance_assets'], 2, '.', '') == 0 ? "" : number_format($account['receiptsdetails_sum_balance_assets'], 2, '.', '');
        }
        $company->nombre_gestion = $gestion->name;
        /* Esto no debería hacerse pero bueno */
        $company->fecha_inicio_ges = Carbon::parse($gestion->start_date)->format('d/m/Y');
        $company->fecha_fin_ges = Carbon::parse($gestion->end_date)->format('d/m/Y');
        $company->fecha_reporte = now()->format('d/m/Y');
        $company->usuario = $request->usuario ?  $request->usuario : 'Anonimo';
        $company->cuentas = $data;
        return response()->json($company);
        //return Inertia::render('Accounts/BalanceGeneral', $company);
    }
}
