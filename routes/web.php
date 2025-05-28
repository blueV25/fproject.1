<?php

use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\BookController;
use App\Http\Controllers\SavedBookController;


Route::get('/', [BookController::class, 'home']);
Route::get('/search', [BookController::class, 'search']);
Route::get('/saved', [SavedBookController::class, 'index']);


Route::post('/save-book', [SavedBookController::class, 'store']);

Route::delete('/delete-book/{id}', [SavedBookController::class, 'destroy']);



