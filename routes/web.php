<?php

use App\Http\Controllers\Inicio\ComentariosController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    /*return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);*/
    return Inertia::render('Auth/Login', []);
});

// Route::get('/inicio', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('inicio');

Route::get('/inicio', [App\Http\Controllers\Inicio\InicioController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('inicio');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function(){
    Route::get('/anuncios', [App\Http\Controllers\Inicio\AnunciosController::class, 'index'])->name('anuncios.index');
    Route::get('/comentarios', [App\Http\Controllers\Inicio\ComentariosController::class, 'index'])->name('comentarios.index');
    Route::post('/comentarios', [ComentariosController::class, 'sendEmail'])->name('comentarios.store');
});


require __DIR__.'/auth.php';
