<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReceiptDetail extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "receiptdetails";
    protected $primaryKey = "id_receiptdetail";
    protected $fillable = [
        'number',
        'comment',
        'balance_debit',
        'balance_assets',
        'balance_debitAlt',
        'balance_assetsAlt',
        'id_user',
        'id_receipt',
        'id_account'
    ];
    //Account relationship
    public function account()
    {
        return $this->belongsTo(Account::class, 'id_account', 'id_account');
    }
    public function receipt()
    {
        return $this->belongsTo(Receipt::class, 'id_receipt', 'id_receipt');
    }
}
