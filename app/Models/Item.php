<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "items";
    protected $primaryKey = "id_item";
    protected $fillable = [
        'name',
        'description',
        'quantity',
        'price',
        'id_company',
        'id_user'
    ];
}
