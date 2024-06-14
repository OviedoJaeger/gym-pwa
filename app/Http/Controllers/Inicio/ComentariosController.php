<?php

namespace App\Http\Controllers\Inicio;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Comentarios\StoreRequest;
use App\Mail\ComentariosMailable;
use Illuminate\Support\Facades\Mail;

class ComentariosController extends Controller
{
    public function index (){

        return Inertia::render('Comentarios/Index');
    }

    public function sendEmail(StoreRequest $request){

            $datos = $request->only('motive', 'description', 'username');
            
            Mail::to("bodygymazteca@gmail.com")->send(new ComentariosMailable($datos));

    }
}
