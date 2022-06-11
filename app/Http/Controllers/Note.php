<?php

namespace App\Http\Controllers;

use App\Models\Account_config;
use App\Models\Articles;
use App\Models\CoinCompany;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use App\Models\Company;
use App\Models\ManagementDate;
use App\Models\Notes;
use App\Models\Notes_Lot;
use App\Models\Receipt;
use App\Models\ReceiptDetail;
use Carbon\Carbon;

class Note extends Controller
{
    public function view($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        if ($exists) {
            //$exists->load('notes.notes_details', 'notes.notes_lot', 'receipts', 'articles');
            $exists->load(['notes' => function ($query) {
                $query->withTrashed()->with('notes_details', 'notes_lot')->orderBy('id_note', 'desc');
            }, 'receipts', 'articles']);
            return Inertia::render('Crud-Note', [
                'company' => $exists,
                'userData' => fn () => Auth::user(),
            ]);
        }
        return Redirect::route('companies');
    }
    public function create_v(Request $request)
    {
        $request->validate([
            'date' => 'required|date',
            'description' => 'required|string|min:3|max:255',
            'total' => 'required|numeric',
            'id_company' => 'required|exists:companies,id_company',
            'table' => 'required',
        ]);
        /* Validating if the logged user belongs to the company */
        $company = Company::where('id_company', $request->id_company)
            ->where('id_user', Auth::user()->id_user)->get()->count();
        if ($company == 0) {
            return back()->withErrors(['error' => 'No tienes permiso para realizar esta acción']);
        }
        $request->date = Carbon::parse($request->date); //Convertimos la fecha a carbon
        /* Esto debería ser creado con un comprobante */
        //Primero se comprube que esté seteado el config de accounts
        $exists = Account_config::where('id_company', $request->id_company)->first();
        $idReceipt = null;
        DB::beginTransaction();
        //0 es no 1 es si
        if ($exists != null && $exists->integration == 1) {
            //si está seteado crear el comprobante
            global $idReceipt;
            /* Validating if the date is inside a period inside the company */
            $date = Carbon::parse($request->date)->format('Y-m-d');
            $isBetween = ManagementDate::where('management_dates.id_company', $request->id_company)
                ->join('periods', 'management_dates.id_management', '=', 'periods.id_management')
                ->where('management_dates.id_user', Auth::user()->id_user)
                ->where('management_dates.status', 1)
                ->where('periods.status', 1)
                ->where('periods.start_date', '<=', $date)
                ->where('periods.end_date', '>=', $date)
                ->count();
            if ($isBetween == 0 || $isBetween == '0') {
                return back()->withErrors(['error' => 'La fecha no está dentro de un período abierto']);
            }
            //Obtengo la moneda activa
            $maincoin = CoinCompany::where('id_company', $request->id_company)->where('active', 1)->first();
            /* PORFAAA */

            try {
                $nuevo = Receipt::create([
                    'serial_number' => DB::raw('contarUltimoEmpresa(' . $request->id_company . ')'),
                    'date' => Carbon::parse($request->date),
                    'comment' => "Venta de mercaderías",
                    'TC' => $maincoin->exchange,
                    //Como es una compra necesita un comprobante de egreso
                    'receipt_type' => 1,
                    'id_company' => $request->id_company,
                    'id_user' => Auth::user()->id_user,
                    'id_coin' => $maincoin->id_maincoin
                ]);
                $idReceipt = $nuevo->id_receipt;
                /* Initial array */
                $m_details = [];
                /* Necesitamos el account_config de esta empresa*/
                $account_config = Account_config::where('id_company', $request->id_company)->first();
                /* Ok definimos los 3 detalles que se harán, que son caja, compras y crédito fiscal */

                for ($i = 0; $i < 5; $i++) {
                    //Iteracion 0 es caja 1 es impuesto a las transacciones (IT), 2 es ventas, 3 es debito fiscal, 4 es it por pagar
                    $m_details[] = [
                        'id_account' => $i == 0 ? $account_config->id_account_caja : ($i == 1 ? $account_config->id_account_it : ($i == 2 ? $account_config->id_account_ventas : ($i == 3 ? $account_config->id_account_debito_f : $account_config->id_account_it_p))),
                        'number' => $i + 1,
                        'comment' => 'Venta de mercaderías',
                        'balance_debit' => $i == 0 ? $request->total : ($i == 1 ? $request->total * 0.03 : 0),
                        'balance_assets' => $i == 2 ? $request->total - $request->total * 0.13 : ($i == 3 ? $request->total * 0.13 : ($i == 4 ? $request->total * 0.03 : 0)),
                        'balance_debitAlt' =>
                        $i == 0 ? $request->total / $maincoin->exchange : ($i == 1 ? ($request->total * 0.03) / $maincoin->exchange : 0),
                        'balance_assetsAlt'  => $i == 2 ? ($request->total - $request->total * 0.13) / $maincoin->exchange : ($i == 3 ? ($request->total * 0.13) / $maincoin->exchange : ($i == 4 ? ($request->total * 0.03) / $maincoin->exchange : 0)),
                        'id_receipt' => $nuevo->id_receipt,
                        'id_user' => Auth::user()->id_user,
                    ];
                }
                /* Finally create this garbage */
                ReceiptDetail::insert($m_details);
                //return back()->with(['success' => 'Se ha creado el comprobante correctamente']);
            } catch (\Exception $e) {
                DB::rollback();
                return back()->withErrors(['error' => 'Ha ocurrido un error al crear el comprobante' . $e->getMessage()]);
            }
        }
        //Si no existe simplemente es null
        //Empezamos la transacción
        try {
            /* Aquí deberiamos crear el comprobante */
            $note = Notes::create([
                'number' => ['id_company' => $request->id_company, 'type' => 2],
                'date' => $request->date,
                'description' => $request->description,
                'total' => $request->total,
                'type' => 2,
                'id_receipt' => $idReceipt,
                'id_company' => $request->id_company,
                'id_user' => Auth::user()->id_user
            ]);
            /* Iteramos en tablas y parseamos la fecha */
            $newArray = [];
            foreach ($request->table as $key => $value) {
                $newArray[$key] =  [
                    'id_note_lot' => $value['id_note_lot'],
                    'sale_price' => $value['sale_price'],
                    'quantity' => $value['quantity'],
                ];
            }
            // enviamos la data
            $note->notes_details()->attach($newArray);
            // quitamos la cantidad al stock de dicho articulo
            foreach ($request->table as $key => $value) {
                $stock = Articles::where('id_article', $key)->first();
                $stock->quantity = $stock->quantity - $value['quantity'];
                $stock->save();
                //Also remove stock from lot

                $lot = Notes_Lot::where("id_note_lot", $value['id_note_lot'])->where('id_article', $key)->first();
                $lot->quantity = $lot->quantity - $value['quantity'];
                DB::table('notes_lot')->where('id_note_lot', $value['id_note_lot'])->where('id_article', $key)->update(['quantity' => $lot->quantity]);
            }
            DB::commit(); //If all goes well commit the changes
            return back()->with('success', ['message' => 'Comprobante creado correctamente']);
        } catch (\Exception $e) {
            DB::rollback();
            return back()->withErrors(['message' => 'Error al crear el comprobante ' . $e->getMessage()]);
        }
    }
    public function create_c(Request $request)
    {
        $request->validate([
            /* Esto es originalmente del modelo */
            'date' => 'required|date',
            'description' => 'required|string|min:3|max:255',
            'total' => 'required|numeric',
            'id_company' => 'required|exists:companies,id_company',
            /* Y esto es nuestro array de valores del lote */
            'table' => 'required',
        ]);
        $request->date = Carbon::parse($request->date); //Convertimos la fecha a carbon
        /* Esto debería ser creado con un comprobante */
        //Primero se comprube que esté seteado el config de accounts
        $exists = Account_config::where('id_company', $request->id_company)->first();
        $idReceipt = null;
        DB::beginTransaction();
        //0 es no 1 es si
        if ($exists != null && $exists->integration == 1) {
            global $idReceipt;
            //si está seteado crear el comprobante
            /* Validating if the logged user belongs to the company */
            $company = Company::where('id_company', $request->id_company)
                ->where('id_user', Auth::user()->id_user)->get()->count();
            if ($company == 0) {
                return back()->withErrors(['error' => 'No tienes permiso para realizar esta acción']);
            }
            /* Validating if the date is inside a period inside the company */
            $date = Carbon::parse($request->date)->format('Y-m-d');
            $isBetween = ManagementDate::where('management_dates.id_company', $request->id_company)
                ->join('periods', 'management_dates.id_management', '=', 'periods.id_management')
                ->where('management_dates.id_user', Auth::user()->id_user)
                ->where('management_dates.status', 1)
                ->where('periods.status', 1)
                ->where('periods.start_date', '<=', $date)
                ->where('periods.end_date', '>=', $date)
                ->count();
            if ($isBetween == 0 || $isBetween == '0') {
                return back()->withErrors(['error' => 'La fecha no está dentro de un período abierto']);
            }
            //Obtengo la moneda activa
            $maincoin = CoinCompany::where('id_company', $request->id_company)->where('active', 1)->first();
            /* PORFAAA */

            try {
                $nuevo = Receipt::create([
                    'serial_number' => DB::raw('contarUltimoEmpresa(' . $request->id_company . ')'),
                    'date' => Carbon::parse($request->date),
                    'comment' => "Compra de mercaderías",
                    'TC' => $maincoin->exchange,
                    //Como es una compra necesita un comprobante de egreso
                    'receipt_type' => 2,
                    'id_company' => $request->id_company,
                    'id_user' => Auth::user()->id_user,
                    'id_coin' => $maincoin->id_maincoin
                ]);

                $idReceipt = $nuevo->id_receipt;
                /* Initial array */
                $m_details = [];
                /* Necesitamos el account_config de esta empresa*/
                $account_config = Account_config::where('id_company', $request->id_company)->first();
                /* Ok definimos los 3 detalles que se harán, que son caja, compras y crédito fiscal */

                for ($i = 0; $i < 3; $i++) {
                    //Iteracion 0 es caja, 1 es credito fiscal y 2 es compras
                    $m_details[] = [
                        'number' => $i + 1,
                        'comment' => 'Compra de mercaderías',
                        'balance_debit' => $i == 0 ? 0 : ($i == 1 ? $request->total * 0.13 : ($request->total - $request->total * 0.13)),
                        'balance_assets' => $i == 0 ? $request->total : 0,
                        'balance_debitAlt' =>
                        $i == 0 ? 0 : ($i == 1 ? ($request->total * 0.13) / $maincoin->exchange : (($request->total - $request->total * 0.13)) / $maincoin->exchange),
                        'balance_assetsAlt'  => $i == 0 ? ($request->total / $maincoin->exchange) : 0,
                        'id_receipt' => $nuevo->id_receipt,
                        'id_account' => $i == 0 ? $account_config->id_account_caja : ($i == 1 ? $account_config->id_account_credito_f : $account_config->id_account_compras),
                        'id_user' => Auth::user()->id_user,
                    ];
                }
                /* Finally create this garbage */
                ReceiptDetail::insert($m_details);

                //return back()->with(['success' => 'Se ha creado el comprobante correctamente']);
            } catch (\Exception $e) {
                DB::rollback();
                return back()->withErrors(['error' => 'Ha ocurrido un error al crear el comprobante' . $e->getMessage()]);
            }
        }
        //Si no existe simplemente es null
        //Empezamos la transacción


        try {
            /* Aquí deberiamos crear el comprobante */
            $note = Notes::create([
                'number' => ['id_company' => $request->id_company, 'type' => 1],
                'date' => $request->date,
                'description' => $request->description,
                'total' => $request->total,
                'type' => 1,
                'id_receipt' => $idReceipt,
                'id_company' => $request->id_company,
                'id_user' => Auth::user()->id_user
            ]);
            /* Iteramos en tablas y parseamos la fecha */
            $newArray = [];
            foreach ($request->table as $key => $value) {
                $newArray[$key] =  [
                    'entry_date' => Carbon::parse($value['entry_date']),
                    'expiration_date' => Carbon::parse($value['expiration_date']),
                    'id_note_lot' => $value['id_note_lot'],
                    'purchase_price' => $value['purchase_price'],
                    'quantity' => $value['quantity'],
                    'stock' => $value['stock'],
                ];
            }

            // enviamos la data
            $note->notes_lot()->attach($newArray);
            // agregamos la cantidad al stock de dicho articulo
            foreach ($request->table as $key => $value) {
                $stock = Articles::where('id_article', $key)->first();
                $stock->quantity = $stock->quantity + $value['quantity'];
                $stock->save();
            }
            DB::commit(); //If all goes well commit the changes
            return back()->with('success', ['message' => 'Comprobante creado correctamente']);
        } catch (\Exception $e) {
            DB::rollback();
            return back()->withErrors(['message' => 'Error al crear el comprobante ' . $e->getMessage()]);
        }
    }
    public function delete_c(Request $request)
    {
        $request->validate([
            'id_note' => 'required|exists:notes,id_note',
        ]);
        $note = Notes::findOrFail($request->id_note)->load(['notes_lot']);
        /* Validar si tiene ventas */
        $rel = DB::table('notes_lot')->where('notes_lot.id_note', $request->id_note)->get();
        $count = 0;
        foreach ($rel as $r) {
            $count = $count + DB::table('notes_details')->where('id_note_lot', $r->id_note_lot)->count();
        }
        if ($count > 0) {
            return back()->withErrors(['error' => 'No se puede eliminar el comprobante, tiene ventas asociadas']);
        }
        DB::beginTransaction();
        try {

            foreach ($note->notes_lot as $key => $value) {
                /* Suponiendo que lo devuelve como un modelo iterable con sus métodos y funciones... */
                $value->decrement('quantity', $value->pivot->quantity);
            }
            $pivotValues = [];
            foreach ($note->notes_lot as $key => $value) {
                DB::table('notes_lot')->where('id_note', $note->id_note)->where('id_article', $value->id_article)->update(['deleted_at' => now()]);
            }
            if ($note->id_receipt != null) {
                $receipt = Receipt::findOrFail($note->id_receipt);
                $receipt->status = 2;
                $receipt->save();
            }
            $note->delete();

            DB::commit();
            return back()->with([
                'success' => 'Nota eliminada correctamente'
            ]);
        } catch (\Exception $e) {
            DB::rollback();
            return back()->withErrors(['message' => 'Error al eliminar el comprobante ' . $e->getMessage()]);
        }
    }
    public function delete_v(Request $request)
    {
        $request->validate([
            'id_note' => 'required|exists:notes,id_note',
        ]);
        $note = Notes::findOrFail($request->id_note)->load(['notes_details']);
        DB::beginTransaction();
        try {
            foreach ($note->notes_details as $key => $value) {
                /* Suponiendo que lo devuelve como un modelo iterable con sus métodos y funciones... */
                $value->increment('quantity', $value->pivot->quantity);
                $lote = DB::table('notes_lot')->where('id_note_lot', $value->pivot->id_note_lot)->where('id_article', $value->id_article)->first();

                DB::table('notes_lot')->where('id_note_lot', $value->pivot->id_note_lot)->where('id_article', $value->id_article)->update(['quantity' => $lote->quantity + $value->pivot->quantity]);
            }
            foreach ($note->notes_details as $key => $value) {
                DB::table('notes_details')->where('id_note', $note->id_note)->where('id_article', $value->id_article)->update(['deleted_at' => now()]);
            }
            //De baja si existe el comprobante asociado
            if ($note->id_receipt != null) {
                $receipt = Receipt::findOrFail($note->id_receipt);
                $receipt->status = 2;
                $receipt->save();
            }
            $note->delete();
            DB::commit();
            return back()->with([
                'success' => 'Nota eliminada correctamente'
            ]);
        } catch (\Exception $e) {
            DB::rollback();
            return back()->withErrors(['message' => 'Error al eliminar el comprobante ' . $e->getMessage()]);
        }
    }
}
