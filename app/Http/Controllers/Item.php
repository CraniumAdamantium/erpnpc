<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use App\Models\Categories;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;


use App\Models\Company;

/* Aka articles */

class Item extends Controller
{
    public function view($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        if ($exists) {
            return Inertia::render(
                'Crud-Item',
                [
                    'company' => $exists,
                    'userData' => fn () => Auth::user(),
                    'items' => fn () => Articles::where('id_company', $exists->id_company)->with(['categories', 'notes_lot' => function ($query) {
                        $query->withTrashed();
                    }])->get(),
                    'categories' => fn () => Categories::where('id_company', $exists->id_company)->get(),

                ]
            );
        }
        return Redirect::route('companies');
    }
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',

            'sale_price' => 'required|numeric',
            'id_company' => 'required|exists:companies,id_company',
            'categories' => 'required|array',
        ]);
        //name', 'description', 'quantity', 'sale_price', 'id_company', 'id_user']
        $item = Articles::create([
            'name' => $request->name,
            'description' => $request->description,
            'quantity' => 0,
            'sale_price' => $request->sale_price,
            'id_company' => $request->id_company,
            'id_user' => Auth::user()->id_user
        ]);
        $item->categories()->attach($request->categories);
        return back()->with('success', ['message' => 'Item creado correctamente']);
    }
    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'quantity' => 'required|numeric',
            'sale_price' => 'required|numeric',
            'id_company' => 'required|exists:companies,id_company',
            'categories' => 'required|array',
        ]);
        $item = Articles::find($request->id_article);
        $item->name = $request->name;
        $item->description = $request->description;
        $item->quantity = $request->quantity;
        $item->sale_price = $request->sale_price;
        $item->id_company = $request->id_company;
        $item->save();
        $item->categories()->sync($request->categories);
        return back()->with('success', ['message' => 'Item actualizado correctamente']);
    }
    public function delete(Request $request)
    {
        $request->validate([
            'id_article' => 'required|exists:articles,id_article',
        ]);
        $contador = DB::table('notes_lot')->where('id_article', $request->id_article)->count();
        $contador2 = DB::table('notes_details')->where('id_article', $request->id_article)->count();
        if ($contador + $contador2 > 0) {
            return back()->withErrors(['message' => 'No se puede eliminar el articulo porque tiene notas asociadas']);
        }
        Articles::find($request->id_article)->delete();
        return back()->with('success', ['message' => 'Item eliminado correctamente']);
    }
}
