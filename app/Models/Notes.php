<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DateTimeInterface;

use Illuminate\Database\Eloquent\Casts\Attribute;

class Notes extends Model
{
    use HasFactory, SoftDeletes;
    public $timestamps = false;
    protected $table = "notes";
    protected $primaryKey = "id_note";
    protected $fillable = [
        'number',
        'date',
        'description',
        'total',
        'type',
        'id_company',
        'id_user',
        'id_receipt'
    ];
    public function notes_details()
    {
        return $this->hasMany(Notes_Details::class, 'id_note', 'id_note');
    }
    public function notes_lot()
    {
        return $this->belongsToMany(Articles::class, Notes_Lot::class, 'id_note', 'id_article')
            //->wherePivotNull('deleted_at')
            ->withPivot('id_note_lot', 'id_note', 'id_article', 'entry_date', 'expiration_date', 'quantity', 'purchase_price', 'stock', 'deleted_at');
    }

    protected $casts = [
        'date' => 'datetime:d/m/Y ',
        'deleted_at' =>  'datetime:d/m/Y ',
    ];
    /* We need to autoincrement the note_number based on type, so we cast */
    /* Now to set number we need to pass 2 things, 1.- company and type, this in an array */
    public function number(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value,
            set: fn ($value) => Notes::withTrashed()->where('id_company', $value['id_company'])->where('type', $value['type'])->count('number') + 1,
        );
    }
}
