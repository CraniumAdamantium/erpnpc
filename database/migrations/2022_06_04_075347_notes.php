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
        Schema::create('notes', function (Blueprint $table) {
            $table->id('id_note');
            $table->integer('number');
            $table->dateTime('date');
            $table->string('description');
            $table->decimal('total', 10, 2);
            $table->tinyInteger('type'); //1 is for buys, 2 is for sales
            $table->softDeletes();
            $table->foreignId('id_company')->constrained('companies', 'id_company');
            $table->foreignId('id_user')->constrained('users', 'id_user');
            //Nullable if integration is set to 0
            $table->foreignId('id_receipt')->nullable()->constrained('receipts', 'id_receipt');
            //one to one, so id_receipt is unique
            $table->unique(['id_receipt']);
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
