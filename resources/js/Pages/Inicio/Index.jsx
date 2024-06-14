import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Card } from 'primereact/card';
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';
import moment from 'moment';

const Index = ({auth, usuario, vencido, asistencias, asistenciasMes, asistenciasMesAnterior}) => {

    const msgs = useRef(null);

    const mensaje_vencido = useRef(null);
    

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                { sticky: true, severity: 'info', summary: 'Usuarios en el gym actualmente(aprox):', detail: asistencias, closable: false },
            ]);
        }
    });

    useMountEffect(() => {

        if (mensaje_vencido.current) {
            mensaje_vencido.current.clear();
            mensaje_vencido.current.show([
                { sticky: true, severity: 'warn', summary: 'Oops', detail: 'Tu suscripción ha vencido', closable: false },
            ]);
        }
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="justify-between">
                    Inicio
                </div>
                
            }
        >
            <Head title="Inicio" />

            <div className="">
                <div className="card flex flex-col" >
                    
                    <Messages ref={msgs} className="bg-dark-primary" />         
                    {vencido === true &&
                        <Messages ref={mensaje_vencido} className="bg-dark-primary" />
                    }    
                </div>


                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-dark-primary overflow-hidden shadow-sm sm:rounded-lg">        
                        <div className="p-6 text-dark-text">
                            <div className="card ">
                                <Card title="Nombre" className=" text-dark-text mb-2 bg-[#18181b] h-28">
                                    <p className="m-0 text-lg">
                                        {usuario[0].nombre} {usuario[0].apellido}
                                    </p>
                                </Card>
                                <Card title="Nombre de Usuario" className=" text-dark-text mb-2 bg-dark-secondary h-28">
                                    <p className="m-0 text-lg">
                                        {auth.user.name}
                                    </p>
                                </Card>
                                <Card title="Correo Registrado" className="bg-[#18181b] text-dark-text mb-2 h-28">
                                    <p className="m-0 text-lg">
                                        {usuario[0].correo}
                                    </p>
                                </Card>
                                <Card title="Plan Actual" className="bg-dark-secondary text-dark-text mb-5">
                                    <p className="m-1 text-lg">
                                        Inicio:  {moment(usuario[0].fecha_inicio).format('DD/MM/YYYY')}
                                    </p>
                                    <p className="m-1 text-lg">
                                        Fin:  {moment(usuario[0].fecha_termino).format('DD/MM/YYYY')}
                                    </p>
                                    <p className="m-1 text-lg">
                                        Tipo:  {usuario[0].paquete}
                                    </p>
                                </Card>
                                <Card title="Plan Actual" className="bg-dark-secondary text-dark-text mb-5">
                                    <p className="m-1 text-lg">
                                        Este mes has asistido:  {asistenciasMes} veces
                                    </p>
                                    <p className="m-1 text-lg">
                                        El mes pasado asististe:  {asistenciasMesAnterior} veces
                                    </p>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
