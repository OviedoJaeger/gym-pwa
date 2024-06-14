import React from 'react'
import { Link } from '@inertiajs/react';

const MenuInferior = () => {

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-dark-primary border-t border-dark-primary dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <Link href="/inicio" className="inline-flex flex-col items-center justify-center px-5 hover:bg-dark-secondary dark:hover:bg-gray-800 group">
                    
                        <i className="pi pi-home w-5 h-5 mb-2 text-gray-300 dark:text-gray-400 group-hover:text-dark-text dark:group-hover:text-dark-text"></i>
                        <span className="text-sm text-gray-300 dark:text-gray-400 group-hover:text-dark-text dark:group-hover:text-dark-text">Inicio</span>
                    
                </Link>
                <Link href="/anuncios" className="inline-flex flex-col items-center justify-center px-5 hover:bg-dark-secondary dark:hover:bg-gray-800 group">
                    
                        <i className="pi pi-megaphone w-5 h-5 mb-2 text-gray-300 dark:text-gray-400 group-hover:text-dark-text dark:group-hover:text-dark-text"></i>
                        <span className="text-sm text-gray-300 dark:text-gray-400 group-hover:text-dark-text dark:group-hover:text-dark-text">Anuncios</span>
                        
                </Link>
                <Link href='/comentarios' className="inline-flex flex-col items-center justify-center px-5 hover:bg-dark-secondary dark:hover:bg-gray-800 group">
                    
                        <i className="pi pi-comment w-5 h-5 mb-2 text-gray-300 dark:text-gray-400 group-hover:text-dark-text dark:group-hover:text-dark-text"></i>
                        <span className="text-sm text-gray-300 dark:text-gray-400 group-hover:text-dark-text dark:group-hover:text-dark-text">Sugerencias</span>

                </Link>
                <Link href={route('logout')} method="post" className="inline-flex flex-col items-center justify-center px-5 hover:bg-dark-secondary dark:hover:bg-gray-800 group">
                    
                        <i className="pi pi-power-off w-5 h-5 mb-2 text-gray-300 dark:text-gray-400 group-hover:text-dark-text dark:group-hover:text-dark-text"></i>
                        <span className="text-sm text-gray-300 dark:text-gray-400 group-hover:text-dark-text dark:group-hover:text-dark-text">Salir</span>
                    
                </Link>
            </div>
        </div>
    )
}

export default MenuInferior

//bg-dark-primary text-dark-text