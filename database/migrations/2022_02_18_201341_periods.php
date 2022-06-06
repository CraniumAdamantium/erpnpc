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
        Schema::create('periods', function (Blueprint $table) {
            $table->id('id_period');
            $table->string('name');
            $table->timestamp('start_date');
            $table->timestamp('end_date');
            $table->tinyInteger('status');
            $table->foreignId('id_user')->constrained('users', 'id_user')->cascadeOnDelete();
            $table->foreignId('id_management')->constrained('management_dates', 'id_management')->cascadeOnDelete();
            $table->unique(['id_management', 'name']);
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
