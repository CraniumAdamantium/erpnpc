<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;


use App\Models\Company;

class Category extends Controller
{
    public function view($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        $exists->load('categories.articles.notes_lot');
        if ($exists) {
            return Inertia::render('Crud-Category', [
                'company' => $exists,
                'user' => Auth::user(),
            ]);
        }
        return Redirect::route('companies');
    }
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'id_company' => 'required|integer',
            'id_parent_category' => 'nullable|integer',
        ]);

        //Valida los nombres silva!!!

        Categories::create([
            'name' => $request->name,
            'description' => $request->description,
            'id_company' => $request->id_company,
            'id_parent_category' => $request->id_parent_category,
            'id_user' => Auth::user()->id_user,
        ]);
        return back()->with('success', 'Categoria creada correctamente');
    }
    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'id_category' => 'required|integer',
        ]);
        $category = Categories::find($request->id_category);
        $category->name = $request->name;
        $category->description = $request->description;
        $category->save();
        return back()->with('success', 'Categoria actualizada correctamente');
    }
    public function delete(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:categories,id_category',
        ]);
        $category = Categories::find($request->id);
        /* No childs */
        $child = Categories::where('id_parent_category', $category->id_category)->first();
        if (!$child) {
            $category->delete();
            return back()->with('success', 'Categoria eliminada correctamente');
        }
        return back()->withErrors(['error' => 'No se puede eliminar la categoria porque tiene subcategorias']);
    }
}
