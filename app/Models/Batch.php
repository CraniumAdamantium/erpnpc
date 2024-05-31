<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "batches";
    protected $fillable = [
        'id_item',
        'batch_number',
        'admission_date',
        'due_date',
        'quantity',
        'price',
        'stock',
        'id_note'
    ];
} 
