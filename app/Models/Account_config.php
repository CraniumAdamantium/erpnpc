<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account_config extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "account_config";
    protected $fillable = [
        'id_company',
        'id_account_caja',
        'id_account_credito_f',
        'id_account_debito_f',
        'id_account_compras',
        'id_account_ventas',
        'id_account_it',
        'id_account_it_p',
        'integration'
    ];
}
