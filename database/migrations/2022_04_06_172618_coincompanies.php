<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coincompanies', function (Blueprint $table) {
            $table->id('id_coincompany');
            $table->decimal('exchange', 15, 2)->default(0.00);
            $table->tinyInteger('active')->default(0);
            $table->foreignId('id_company')->constrained('companies', 'id_company')->cascadeOnDelete();
            $table->foreignId('id_maincoin')->constrained('coins', 'id_coin')->cascadeOnDelete();
            $table->foreignId('id_alternativecoin')->nullable()->constrained('coins', 'id_coin')->cascadeOnDelete();
            $table->foreignId('id_user')->constrained('users', 'id_user')->cascadeOnDelete();
            $table->timestamps();
        });
        DB::unprepared("
        INSERT INTO silva.coins
        (id_coin, name, description, initials, abbreviation, id_user)
        VALUES(1, 'Pesos Chilenos', 'Chile', 'CLP.', 'CLP.', 1);
        INSERT INTO silva.coins
        (id_coin, name, description, initials, abbreviation, id_user)
        VALUES(2, 'Bolivianos', 'Bolivia', 'BOB', 'Bs.', 1);
        INSERT INTO silva.coins
        (id_coin, name, description, initials, abbreviation, id_user)
        VALUES(3, 'Dólares ', 'Estados Unidos', 'US', '\$US', 1);
        INSERT INTO silva.coins
        (id_coin, name, description, initials, abbreviation, id_user)
        VALUES(4, 'Reales', 'Brasil', 'R.', 'R.', 1);
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
