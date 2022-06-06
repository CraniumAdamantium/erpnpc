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
        Schema::create('receipts', function (Blueprint $table) {
            $table->id('id_receipt');
            $table->bigInteger('serial_number');
            $table->string('comment');
            $table->timestamp('date');
            $table->decimal('TC', 15, 2)->default(0.00);
            $table->tinyInteger('status')->default(1);
            $table->string('receipt_type');
            $table->foreignId('id_company')->constrained('companies', 'id_company')->cascadeOnDelete();
            $table->foreignId('id_user')->constrained('users', 'id_user')->cascadeOnDelete();
            $table->foreignId('id_coin')->constrained('coins', 'id_coin')->cascadeOnDelete();
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
