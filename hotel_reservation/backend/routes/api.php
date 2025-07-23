<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoomTypeController;
use App\Http\Controllers\MealPlanController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Room Type Routes
Route::get('/room-types', [RoomTypeController::class, 'index']);
Route::post('/room-types', [RoomTypeController::class, 'create']);
Route::put('/room-types/{id}', [RoomTypeController::class, 'update']);
Route::delete('/room-types', [RoomTypeController::class, 'delete']);

// Meal Plan Routes
Route::get('/meal-plans', [MealPlanController::class, 'index']);
Route::post('/meal-plans', [MealPlanController::class, 'create']);
Route::put('/meal-plans/{id}', [MealPlanController::class, 'update']);
Route::delete('/meal-plans', [MealPlanController::class, 'delete']);
