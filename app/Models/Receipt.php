<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receipt extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "receipts";
    protected $primaryKey = "id_receipt";
    protected $fillable = [
        'serial_number',
        'comment',
        'date',
        'TC',
        'status',
        'receipt_type',
        'id_company',
        'id_user',
        'id_coin'
    ];
    //Create casts for receipt detail model

    public function details()
    {
        return $this->hasMany(ReceiptDetail::class, 'id_receipt', 'id_receipt');
    }

}
