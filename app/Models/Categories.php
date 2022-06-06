<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "categories";
    protected $primaryKey = "id_category";
    protected $fillable = [
        'name',
        'description',
        'id_company',
        'id_user',
        'id_parent_category'
    ];
}
