<?php

namespace App\Http\Controllers\Inicio;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Anuncios;

class AnunciosController extends Controller
{
    public function index (){

        $consulta  = Anuncios::query();
        $datosAnuncio = $consulta->select("titulo", "contenido", "created_at")->latest()->get();

        return Inertia::render('Anuncios/Index', compact('datosAnuncio'));
    }
}
