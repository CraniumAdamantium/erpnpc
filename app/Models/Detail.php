<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "details";
    protected $fillable = [
        'id_item',
        'id_note',
        'batch_number',
        'quantity',
        'price'
    ];
}
