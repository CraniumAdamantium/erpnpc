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
        Schema::create(
            'account_config',
            function (Blueprint $table) {
                $table->foreignId('id_company')->constrained('companies', 'id_company')->onDelete('cascade');
                $table->foreignId('id_account_caja')->constrained('accounts', 'id_account')->onDelete('cascade');
                $table->foreignId('id_account_credito_f')->constrained('accounts', 'id_account')->onDelete('cascade');
                $table->foreignId('id_account_debito_f')->constrained('accounts', 'id_account')->onDelete('cascade');
                $table->foreignId('id_account_compras')->constrained('accounts', 'id_account')->onDelete('cascade');
                $table->foreignId('id_account_ventas')->constrained('accounts', 'id_account')->onDelete('cascade');
                $table->foreignId('id_account_it')->constrained('accounts', 'id_account')->onDelete('cascade');
                $table->foreignId('id_account_it_p')->constrained('accounts', 'id_account')->onDelete('cascade');
                $table->tinyInteger('integration')->default(0); //0 no 1 yes
                $table->unique(['id_company', 'integration']); //No double state
            }
        );
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
