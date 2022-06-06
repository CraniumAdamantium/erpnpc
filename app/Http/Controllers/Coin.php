<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;    
use Illuminate\Support\Facades\Auth;
use App\Models\Coin as CoinModels;

class Coin extends Controller
{
    public function read()
    {
        $coins = CoinModels::where('id_user', '=', Auth::user()->id_user)->get(['id_coin', 'name', 'description', 'initials', 'abbreviation']);
        return response()->json(['coins' => $coins]);
    }
}
