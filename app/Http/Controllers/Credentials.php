<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Session;
use App\Models\Company;

class Credentials extends Controller
{
    public function login()
    {
        if (Auth::check()) {
            return Redirect::route('companies');
        }
        return Inertia::render('Login');
    }
    public function signin(Request $request)
    {
        $request->validate([
            'user' => 'required',
            'password' => 'required',
        ]);
        if (!Auth::attempt(['user' => $request->user, 'password' => $request->password, 'state' => 1])) {
            return Inertia::render('Login', [
                'error' => 'Usuario o contraseña incorrectos',
            ]);
        }
        return Redirect::route('companies');
    }
    public function getCurrentUserData()
    {
        return response()->json(['success' => true, 'userData' => Auth::user()]);
    }

    public function signout()
    {
        Session::flush();
        Auth::logout();
        return redirect('/');
    }
    public function hashThis($what_to_hash)
    {
        return Hash::make($what_to_hash);
    }
    public function pruebita()
    {
        return Inertia::render('test');
    }
    public function dashboard($company)
    {
        $exists = Company::where('name', $company)->where('id_user', Auth::user()->id_user)->where('status', 1)->first();
        if ($exists) {
            return Inertia::render('Dashboard');
        }
        return Redirect::route('companies');
    }
}
