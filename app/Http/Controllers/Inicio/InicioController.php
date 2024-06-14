<?php

namespace App\Http\Controllers\Inicio;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Usuario;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Asistencias;
use Illuminate\Support\Facades\Route;

class InicioController extends Controller
{
    
    public function index (){

        $usuarioId = auth()->user()->cliente_id;

        $fecha = Carbon::now();
        $horaActual = $fecha->toDateTimeString();
        $horaAnterior = $fecha->subHour()->toDateTimeString();

        $inicioMes = $fecha->firstOfMonth()->toDateTimeString();
        $inicioMesActual = $fecha->firstOfMonth();
        $inicioMesAnterior = $inicioMesActual->subMonth()->toDateTimeString();

        $consultaAsistencias = Asistencias::query();
        $asistencias = $consultaAsistencias
        ->whereBetween('created_at', [$horaAnterior, $horaActual])
        ->count();

        $asistenciasMes = $consultaAsistencias
        ->where('id_cliente', $usuarioId)
        ->whereBetween('created_at', [$inicioMes, $horaActual])
        ->count();

        $asistenciasMesAnterior = $consultaAsistencias
        ->where('id_cliente', $usuarioId )
        ->whereBetween('created_at', [$inicioMesAnterior, $inicioMes])
        ->count();


        $usuario = Usuario::where('id',$usuarioId)->get();

        $usuario_registrado = $usuario->first();

        $fecha_actual = Carbon::now();

        $routename = Route::currentRouteName();

        //45 usando
        //dd($usuario_registrado->fecha_inicio <= $fecha_actual && $usuario_registrado->fecha_termino >= $fecha_actual);
        if ($usuario_registrado->fecha_inicio <= $fecha_actual && $usuario_registrado->fecha_termino >= $fecha_actual === true) {
            return Inertia::render('Inicio/Index', compact('usuario', 'routename', 'asistencias', 'asistenciasMes', 'asistenciasMesAnterior'));
        } else{
            $vencido = true;
            return Inertia::render('Inicio/Index', compact('usuario', 'vencido', 'routename', 'asistencias', 'asistenciasMes', 'asistenciasMesAnterior'));
        }


    }

}
