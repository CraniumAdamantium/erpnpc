<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notes_Details extends Model
{
    use HasFactory;
    protected $table = 'notes_details';
    protected $fillable = ['id_note', 'id_article', 'id_note_detail', 'quantity', 'sale_price'];
    //mutator

}
