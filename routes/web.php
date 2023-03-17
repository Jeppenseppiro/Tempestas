<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Weather/Index');
})->name('weather');

Route::get('/users', function () {
    sleep(2);
    return Inertia::render('Users', [
        'name' => 'Jeff',
        'techstacks' => [
            'Laravel', 'Vue', 'PHP', 'Python', 'MySQL'
        ],
    ]);
})->name('users');

Route::post('/logout', function () {
    dd("Logout diedump");
})->name('logout');
