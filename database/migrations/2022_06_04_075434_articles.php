<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
        Schema::create('articles', function (Blueprint $table) {
            $table->id('id_article');
            $table->string('name');
            $table->string('description');
            $table->integer('quantity');
            $table->decimal('sale_price', 10, 2);
            $table->foreignId('id_company')->constrained('companies', 'id_company');
            $table->foreignId('id_user')->constrained('users', 'id_user');
        });
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
