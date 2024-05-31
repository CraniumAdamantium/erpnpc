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
        /* This table is a pivot table with articles, but it is for buys AKA compras */
        Schema::create('notes_lot', function (Blueprint $table) {
            $table->integer('id_note_lot'); //Number based in article number of lot, always start at 0
            //Relation to notes
            $table->foreignId('id_note')->constrained('notes', 'id_note');
            //Relation to articles
            $table->foreignId('id_article')->constrained('articles', 'id_article');
            //Entry date is the same as notes date
            $table->dateTime('entry_date');
            $table->dateTime('expiration_date')->nullable();
            $table->integer('quantity');
            $table->decimal('purchase_price', 20, 2);

            // 0 = out of stock
            $table->decimal('stock', 10, 2);

            //Added by me
            $table->softDeletes(); //null is for active, 2 is for anulated

            //Unique key for article id and id_note_lot
            $table->unique(['id_article', 'id_note_lot', 'id_note']);
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
