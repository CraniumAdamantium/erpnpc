<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Period extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_period';
    protected $table = 'periods';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'start_date',
        'end_date',
        'status',
        'id_user',
        'id_management'
    ];

}
