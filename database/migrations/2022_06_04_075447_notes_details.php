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
        /* This table is a pivot table with articles for sales */
        Schema::create('notes_details', function (Blueprint $table) {
            $table->foreignId('id_note')->constrained('notes', 'id_note');
            $table->foreignId('id_article')->constrained('articles', 'id_article');
            $table->integer('id_note_lot'); //Number based in article number of lot, always start at 0
            $table->integer('quantity');
            $table->decimal('sale_price', 20, 2);
            $table->softDeletes();
            //Unique id_note, id_article and id_note_detail
            $table->unique(['id_note', 'id_article', 'id_note_lot']);
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
