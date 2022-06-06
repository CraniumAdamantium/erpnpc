<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('users', function (Blueprint $table) {
            $table->id('id_user');
            //Lo que pidió el profe
            $table->string('user', 50)->unique();
            $table->string('name');
            $table->integer('type');
            $table->tinyInteger('state');
            //
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->timestamps();
        });
        DB::unprepared('
            INSERT INTO `users` (`id_user`, `user`, `name`, `type`, `state`, `email`, `email_verified_at`, `password`, `remember_token`, `profile_photo_path`, `created_at`, `updated_at`)
            VALUES (NULL, "admin", "admin", "1", "1", "admin", "2022-04-08 23:00:24", "$2y$10$YEjqLw6obiBlnXBpIwR7LuprJsMCK6upK1YqlamJ0O6I8bkXX42/G", "admin", "admin", "2022-04-08 23:00:24", "2022-04-08 23:00:24");
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
