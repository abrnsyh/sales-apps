<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->string('external_id');
            $table->bigInteger('fee')->nullable();
            $table->text('title');
            $table->text('description');
            $table->string('status');
            $table->string('event_name')->nullable();
            $table->string('event_type')->nullable();
            $table->string('event_channel')->nullable();
            $table->bigInteger('amount');
            $table->string('return_url');
            $table->timestamp('expires_at');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
