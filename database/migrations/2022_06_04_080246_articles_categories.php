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
        Schema::create('articles_categories', function (Blueprint $table) {
            //Many tomany from article to categories
            $table->foreignId('id_article')->constrained('articles', 'id_article')->onDelete('cascade'); //Only cascade for articles
            $table->foreignId('id_category')->constrained('categories', 'id_category');
            //Make unique
            $table->unique(['id_article', 'id_category']);
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
