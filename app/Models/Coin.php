<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coin extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "coins";
    protected $primaryKey = "id_coin";
    protected $fillable = [
        "name",
        "description",
        "initials",
        "abbreviation",
        "id_user"
    ];
}
