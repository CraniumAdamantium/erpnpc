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
        Schema::create('companies', function (Blueprint $table) {
            $table->id('id_company');
            $table->string('name', 50)->unique();
            $table->string('nit', 30)->unique();
            $table->string('initials', 15)->unique();
            $table->integer('level');
            $table->integer('phone')->nullable();
            $table->string('email', 32)->nullable();
            $table->mediumText('address')->nullable();
            $table->tinyInteger('status');
            $table->foreignId('id_user')->constrained('users', 'id_user')->cascadeOnDelete();
            /* creas el foreign key y lo limitas con la tabla usuario al id_usuario */
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
