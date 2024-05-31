<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

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
    
    public function notes_lot()
    {
        return $this->belongsToMany(Notes::class, Notes_Lot::class, 'id_article', 'id_note')
            //->wherePivotNull('deleted_at')
            ->withPivot('id_note_lot', 'id_note', 'id_article', 'entry_date', 'expiration_date', 'quantity', 'purchase_price', 'stock', 'deleted_at');
    }
}
