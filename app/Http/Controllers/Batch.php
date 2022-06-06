<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;


use App\Models\Company;

class Batch extends Controller
{
    public function view($company)
    {
        $exists = Company::where('name', urldecode($company))->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        if ($exists) {
            return Inertia::render('Crud-Batch');
        }
        return Redirect::route('companies');
    }
    public function read(){}
    public function create(){}
    public function update(){}
    public function delete(){}
}
