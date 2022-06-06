<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    use HasFactory;
    protected $table = 'articles';
    protected $primaryKey = 'id_article';
    protected $fillable = ['name', 'description', 'quantity', 'sale_price', 'id_company', 'id_user'];
    public $timestamps = false;
    public function categories()
    {
        return $this->belongsToMany(Categories::class, Articles_Categories::class, 'id_article', 'id_category');
    }
}
