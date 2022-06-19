<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "accounts";
    protected $primaryKey = "id_account";
    protected $fillable = [
        'code',
        'name',
        'level',
        'id_parent_account',
        'type',
        'id_company',
        'id_user'
    ];
    public function receiptsdetails()
    {
        return $this->hasMany(ReceiptDetail::class, 'id_account', 'id_account');
    }
}
