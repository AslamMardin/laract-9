<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NewsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/homepage', [NewsController::class, 'index']);
Route::post('/homepage',[NewsController::class, 'store'])
->middleware(['auth', 'verified'])->name('my.store');
Route::get('/homepage/show',[NewsController::class, 'show'])
->middleware(['auth', 'verified'])->name('my.show');
Route::get('/homepage/edit',[NewsController::class, 'edit'])
->middleware(['auth', 'verified'])->name('my.edit');
Route::post('/homepage/update',[NewsController::class, 'update'])
->middleware(['auth', 'verified'])->name('my.update');
Route::post('/homepage/delete',[NewsController::class, 'destroy'])
->middleware(['auth', 'verified'])->name('my.delete');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
