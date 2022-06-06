<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Company extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "companies";
    protected $primaryKey = "id_company";
    protected $fillable = [
        'name',
        'nit',
        'initials',
        'phone',
        'email',
        'address',
        'level',
        'id_user',
        'status'
    ];
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->timezone('America/La_Paz')->format('d/m/Y H:i');
    }
    


    public function management_dates()
    {
        return $this->hasMany(ManagementDate::class, 'id_company', 'id_company');
    }
    public function receipts()
    {
        return $this->hasMany(Receipt::class, 'id_company', 'id_company');
    }
    public function accounts()
    {
        return $this->hasMany(Account::class, 'id_company', 'id_company');
    }
    public function coin_companies()
    {
        return $this->hasMany(CoinCompany::class, 'id_company', 'id_company');
    }
    public function categories()
    {
        return $this->hasMany(Categories::class, 'id_company', 'id_company');
    }
    public function notes()
    {
        return $this->hasMany(Notes::class, 'id_company', 'id_company');
    }
    public function articles()
    {
        return $this->hasMany(Articles::class, 'id_company', 'id_company');
    }
    public function account_config()
    {
        return $this->hasOne(Account_config::class, 'id_company', 'id_company');
    }
    //Has many management_dates

}
