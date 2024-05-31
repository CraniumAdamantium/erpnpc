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
        Schema::create('receiptdetails', function (Blueprint $table) {
            $table->id('id_receiptdetail');
            $table->integer('number');
            $table->string('comment');
            $table->float('balance_debit');
            $table->float('balance_assets');
            $table->float('balance_debitAlt');
            $table->float('balance_assetsAlt');
            $table->foreignId('id_user')->constrained('users', 'id_user')->cascadeOnDelete();
            $table->foreignId('id_receipt')->constrained('receipts', 'id_receipt')->cascadeOnDelete();
            $table->foreignId('id_account')->constrained('accounts', 'id_account')->cascadeOnDelete();
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
