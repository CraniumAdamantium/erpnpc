<?php

use App\Http\Controllers\Credentials;
use App\Http\Controllers\Company;
use App\Http\Controllers\ManagementDate;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Account;
use App\Http\Controllers\Batch;
use App\Http\Controllers\Coin;
use App\Http\Controllers\CoinCompany;
use App\Http\Controllers\ExchangeRate;
use App\Http\Controllers\Receipt;
use App\Http\Controllers\controllerTest;
use App\Http\Controllers\Period;
use App\Http\Controllers\ReceiptDetails;
use App\Http\Controllers\Report;
use App\Http\Controllers\Category;
use App\Http\Controllers\Item;
use App\Http\Controllers\Note;
use App\Http\Controllers\Reportes;
use Illuminate\Support\Facades\Hash;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!

*/

//Testing
Route::get('/', [Credentials::class, 'login'])->name('login');
Route::post('/', [Credentials::class, 'signin'])->name('signin');
Route::get('/logout', [Credentials::class, 'signout'])->name('logout');
Route::get('/pruebita', [Credentials::class, 'pruebita'])->name('pruebita')->middleware('isLoggedIn');

//Jasper
Route::get('/reporte/estado_resultados', [Reportes::class, 'estado_resultados'])->name('reporte_estado_resultados');


Route::get('/hash/{hashThis}', function ($hashThis) {
    return Hash::make($hashThis);
})->name('hashTrick');

//Logged user middleware
Route::middleware(['isLoggedIn'])->group(function () {
    Route::get('/empresas/inicio/{name}', [Credentials::class, 'dashboard'])->name('dashboard');

    //Companies
    Route::controller(Company::class)->group(function () {
        Route::get('/empresas', 'view')->name('companies');
        Route::post('/api/companies/create', 'create')->name('companies.api.create');
        Route::get('/api/companies/read', 'read')->name('companies.api.read');
        Route::post('/api/companies/update', 'update')->name('companies.api.update');
        Route::post('/api/companies/softDelete', 'softDelete')->name('companies.api.softDelete');
        //Route::post('/api/companies/restore', 'restore')->name('companies.api.restore')->middleware('isLoggedIn');
    });
    //Management Date
    Route::controller(ManagementDate::class)->group(function () {
        Route::get('/empresas/gestiones/{name}', 'view')->name('date.management');
        Route::get('/api/managementdate/read/{company}', 'read')->name('managementdate.api.read');
        Route::post('/api/managementdate/create', 'create')->name('managementdate.api.create');
        Route::post('/api/managementdate/update', 'update')->name('managementdate.api.update');
        Route::post('/api/managementdate/delete', 'delete')->name('managementdate.api.delete');
    });
    //Accounts
    Route::controller(Account::class)->group(function () {
        Route::get('/empresas/cuentas/{name}', 'view')->name('accounts');
        Route::get('/api/accounts/read/{company}', 'read')->name('accounts.api.read');
        Route::post('/api/accounts/create', 'create')->name('accounts.api.create');
        Route::post('/api/accounts/update', 'update')->name('accounts.api.update');
        Route::post('/api/accounts/delete', 'delete')->name('accounts.api.delete');

        //Cuentas de integración
        Route::get('/empresas/cuentas/integracion/{name}', 'view_config')->name('accounts_config');
        Route::post('/api/accounts/create_config', 'config_create')->name('accounts.api.create_config');
    });
    //Receipts
    Route::controller(Receipt::class)->group(function () {
        Route::get('/empresas/comprobante/{name}', 'viewTableReceipt')->name('receipt');
        Route::get('/api/receipt/read/{company}', 'read')->name('receipts.api.read');
        Route::post('/api/receipt/create', 'create')->name('receipt.api.create');
        Route::post('/api/receipt/getLastserial_number', 'getLastserial_number')->name('receipt.api.getLastserial_number');
        Route::post('/api/receipt/delete', 'delete')->name('receipt.api.delete');
    });
    //UserData
    Route::get('/api/user/data', [Credentials::class, 'getCurrentUserData'])->name('user.data');
    // Periods
    Route::controller(Period::class)->group(function () {
        Route::get('/api/period/read/{id_management}', [Period::class, 'read'])->name('period.api.read');
        Route::get('api/period/read/byCompany/{id_company}', [Period::class, 'readByCompany'])->name('period.api.readByCompany');
        Route::post('/api/period/create', 'create')->name('period.api.create');
        Route::post('/api/period/update', 'update')->name('period.api.update');
        Route::post('/api/period/delete', 'delete')->name('period.api.delete');
    });
    //Coins user
    Route::get('/api/coins/read/', [Coin::class, 'read'])->name('coins.api.read');
    //CoinCompany
    Route::controller(CoinCompany::class)->group(function () {
        Route::get('/empresas/tipo_de_cambio/{name}',  'view')->name('exchange_rate');
        Route::post('/api/coincompany/getByCompanyId', 'getByCompanyId')->name('coincompany.api.getByCompanyId');
        Route::post('/api/coincompany/create', 'create')->name('coincompany.api.create');
    });
    // ReceiptDetails
    Route::controller(ReceiptDetails::class)->group(function () {
        route::get('/api/receiptdetails/read/{id_receipt}', 'read')->name('receiptdetails.api.read');
        route::post('/api/receiptdetails/create', 'create')->name('receiptdetails.api.create');
    });
    // Reports
    Route::controller(Report::class)->group(function () {
        route::get('/api/reports/readrtld/{name}', 'readrtld')->name('reportld.api.read');
        route::get('/api/reports/readrtlm/{name}', 'readrtlm')->name('reportlm.api.read');
        route::get('/api/reports/readrtbi/{name}', 'readrtbi')->name('reportbi.api.read');
        route::get('/api/reports/readrtss/{name}', 'readrtss')->name('reportss.api.read');
    });
    // Categories
    Route::controller(Category::class)->group(function () {
        Route::get('/empresas/categorias/{name}', 'view')->name('categories');
        Route::get('/api/categories/read/{company}', 'read')->name('categories.api.read');
        Route::post('/api/categories/create', 'create')->name('categories.api.create');
        Route::post('/api/categories/update', 'update')->name('categories.api.update');
        Route::post('/api/categories/delete', 'delete')->name('categories.api.delete');
    });
    // Items
    Route::controller(Item::class)->group(function () {
        Route::get('/empresas/artículos/{name}', 'view')->name('items');

        Route::post('/api/items/create', 'create')->name('items.api.create');
        Route::post('/api/items/update', 'update')->name('items.api.update');
        Route::post('/api/items/delete', 'delete')->name('items.api.delete');
    });
    // Batches
    Route::controller(Batch::class)->group(function () {
        Route::get('/empresas/lotes/{name}', 'view')->name('batches');
        Route::get('/api/batches/read/{company}', 'read')->name('batches.api.read');
        Route::post('/api/batches/create', 'create')->name('batches.api.create');
        Route::post('/api/batches/update', 'update')->name('batches.api.update');
        Route::post('/api/batches/delete', 'delete')->name('batches.api.delete');
    });
    // Notes
    Route::controller(Note::class)->group(function () {
        Route::get('/empresas/notas/{name}', 'view')->name('notes');
        Route::post('/api/notes/create_c', 'create_c')->name('notes.api.create_c');
        Route::post('/api/notes/create_v', 'create_v')->name('notes.api.create_v');
        Route::post('/api/notes/update', 'update')->name('notes.api.update');
        Route::post('/api/notes/delete_c', 'delete_c')->name('notes.api.delete_c');
        Route::post('/api/notes/delete_v', 'delete_v')->name('notes.api.delete_v');
    });
});
