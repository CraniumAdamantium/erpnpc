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
        Schema::dropIfExists('cuenta');
        Schema::create('accounts', function (Blueprint $table) {
            $table->id('id_account');
            $table->string('code'); //Diria unique pero el patron es itpo "#-#-#" para todas las empresas
            $table->string('name'); //es unique, pero solo a nivel empresa asi que no acá
            $table->integer('level');
            /*
                👆Esto supongo que refiere al nivel de la cuenta ejemplo
                para empresa nivel 3
                =====================
                1.0.0           -> 1
                    1.1.0       -> 2
                        1.1.1   -> 3
                2.0.0
                    2.1.0
                3.0.0
                    3.1.0
                4.0.0
                    4.1.0
                =====================
                n.n.n
                donde los n.0.0 son de primer nivel
                los n.n.0 son segundo nivel
                y los n.n.n son tercer nivel
            */
            $table->foreignId('id_parent_account')->nullable()->constrained('accounts', 'id_account')->cascadeOnDelete();
            $table->integer('type');
            $table->foreignId('id_company')->constrained('companies', 'id_company')->cascadeOnDelete();
            $table->foreignId('id_user')->constrained('users', 'id_user')->cascadeOnDelete();
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
