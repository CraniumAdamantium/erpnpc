<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Notes_Lot extends Pivot
{
    use HasFactory, SoftDeletes;
    protected $table = 'notes_lot';
    protected $fillable = ['id_note_lot', 'id_note', 'id_article', 'entry_date', 'expiration_date', 'quantity', 'purchase_price', 'stock'];
    public $timestamps = false;
    protected $casts = [
        'entry_date' => 'datetime:d/m/Y',
        'expiration_date' => 'datetime:d/m/Y',
        'deleted_at' => 'datetime:d/m/Y',
    ];

    public function notes()
    {
        return $this->belongsTo(Notes::class, 'id_note', 'id_note');
    }
    public function sales()
    {
        return $this->hasMany(Notes_Details::class, 'id_note', 'id_note');
    }


    public function idnotelot(): Attribute
    {
        //Pasarle el id del articulo noma
        return Attribute::make(
            get: fn ($value) => $value,
            set: fn ($value) => Notes_Lot::where('id_article', $value)->count() + 1,
        );
    }
}
