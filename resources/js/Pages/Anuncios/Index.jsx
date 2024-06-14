import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import ApplicationLogo from '@/Components/ApplicationLogo';
import moment from 'moment';

const Index = ({auth, datosAnuncio}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="justify-between">
                    <h2 className="font-semibold text-xl text-dark-text leading-tight">
                        Anuncios
                    </h2>
                </div>
                
            }
        >
            <Head title="Inicio"/>

            <div className="py-5 bg-dark-primary max-w-8xl mx-auto sm:px-6 lg:px-8">

                <div className="max-w-sm mx-auto bg-dark-secondary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        
                        {/* <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
                        <ApplicationLogo className="rounded-t-lg" />

                    <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">{datosAnuncio[0].titulo}</h5>
                        <p className="mb-3 font-normal text-lg text-dark-text dark:text-gray-400">{datosAnuncio[0].contenido}</p>
                        <p className="mb-3 font-normal text-lg text-dark-text dark:text-gray-400">Publicado el: {moment(datosAnuncio[0].created_at).format('DD/MM/YYYY')}</p>
                    </div>

                </div>
                
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
