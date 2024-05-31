<?php

namespace App\Models;

use Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoinCompany extends Model
{
    use HasFactory;
    public $timestamps = true;
    protected $table = "coincompanies";
    protected $primaryKey = "id_coincompany";
    protected $fillable = [
        'exchange',
        'active',
        'created_at',
        'updated_at',
        'id_company',
        'id_maincoin',
        'id_alternativecoin',
        'id_user'
    ];
    public function scopetimeIsMoney($query)
    {
        return $query->leftjoin('coins as maincoin', 'coincompanies.id_maincoin', '=', 'maincoin.id_coin')
            ->leftjoin('coins as alternativecoin', 'coincompanies.id_alternativecoin', '=', 'alternativecoin.id_coin')
            ->select('coincompanies.*', 'maincoin.name as m_name', 'alternativecoin.name as a_name', 'maincoin.initials as m_initials', 'alternativecoin.initials as a_initials', 'maincoin.abbreviation as m_abbreviation', 'alternativecoin.abbreviation as a_abbreviation', 'maincoin.description as m_description', 'alternativecoin.description as a_description');
    }
    public function main_coin()
    {
        return $this->belongsTo(Coin::class, 'id_maincoin', 'id_coin');
    }
    public function alternative_coin()
    {
        return $this->belongsTo(Coin::class, 'id_alternativecoin', 'id_coin');
    }
}
