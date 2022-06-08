<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Notes_Details extends Pivot
{
    use HasFactory;
    protected $table = 'notes_details';
    protected $fillable = ['id_note', 'id_article', 'id_note_lot', 'quantity', 'sale_price', 'deleted_at'];
    //mutator
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->timezone('America/La_Paz')->format('d/m/Y H:i');
    }
}
