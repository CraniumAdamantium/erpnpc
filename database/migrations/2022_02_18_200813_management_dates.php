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
        Schema::create('management_dates', function (Blueprint $table) {
            $table->id('id_management');
            $table->string('name');
            $table->timestamp('start_date');
            $table->timestamp('end_date');
            $table->tinyInteger('status');
            $table->foreignId('id_user')->constrained('users', 'id_user')->cascadeOnDelete();
            $table->foreignId('id_company')->constrained('companies', 'id_company')->cascadeOnDelete();
            $table->unique(['name', 'id_company']);

            /* creas el foreign key y lo limitas con la tabla usuario al id_usuario */
        });
        /* Making custom event to set status of managementDates, start may need modification*/
        DB::unprepared('
        DROP EVENT IF EXISTS `setStatusManagementDates`;
        CREATE DEFINER=`' . env('DB_USERNAME') . '`@`%`
        EVENT `setStatusManagementDates`
        ON SCHEDULE EVERY 1 DAY STARTS "2022-03-17 00:00:00"
        ON COMPLETION NOT PRESERVE ENABLE
        DO UPDATE `management_dates`
        SET status = 0
        WHERE STATUS = 1 AND end_date <= CURRENT_TIMESTAMP()
        ');
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
