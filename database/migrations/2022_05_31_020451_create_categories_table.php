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
        Schema::create('categories', function (Blueprint $table) {
            $table->id('id_category');
            $table->string('name');
            $table->string('description');
            $table->foreignId('id_company')->constrained('companies', 'id_company');
            $table->foreignId('id_user')->constrained('users', 'id_user');
            $table->foreignId('id_parent_category')->nullable()->constrained('categories', 'id_category');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
