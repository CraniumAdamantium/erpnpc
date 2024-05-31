<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManagementDate extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_management';
    public $timestamps = false;
    protected $table = "management_dates";
    protected $fillable = [
        'name',
        'start_date',
        'end_date',
        'status',
        'id_user',
        'id_company'
    ];
    public function periods()
    {
        return $this->hasMany(Period::class, 'id_management', 'id_management');
    }
}
