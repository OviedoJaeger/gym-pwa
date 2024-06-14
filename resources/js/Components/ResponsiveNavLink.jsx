
import React, { useState, useRef } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';


export default function BasicDemo() {
    const [visible, setVisible] = useState(false);

    return (

        <>

            <div className='lg:block hidden'>
                <div className="card flex justify-content-center ">
                    
                    <Sidebar className="bg-dark-primary text-dark-text" visible={visible} onHide={() => setVisible(false)}>

                            <span className="inline-flex align-items-center gap-2 mb-5">
                                <ApplicationLogo className="block h-7 w-auto fill-current text-gray-800" />
                                <hr></hr>
                                <span className="font-semibold text-2xl text-primary">Menú</span>
                            </span>

                            <div className="min-h-screen flex relative lg:static surface-ground">
                            
                                <div id="app-sidebar-2" className="surface-section h-screen lg:block  absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>

                                    <div className="flex flex-col h-full bg-dark-primary " >
                                    
                                        <ul>
                                            <li>
                                                <Link href="/inicio">
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Inicio</span>
                                                        <Ripple />
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/anuncios">
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-megaphone mr-2"></i>
                                                        <span className="font-medium">Anuncios</span>
                                                        <Ripple />
                                                    </a>
                                                </Link>
                                            </li>
                                            

                                            <li>
                                                <Link href='/comentarios'>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-comment mr-2"></i>
                                                        <span className="font-medium">Comentarios / Sugerencias</span>
                                                        <Ripple />
                                                    </a>
                                                </Link>
                                            </li>
                                            
                                            <hr className='mb-10'></hr>

                                            <li>
                                                    {/* <Dropdown.Link href={route('logout')} method="post" as="button">
                                                            <i className="pi pi-power-off mr-2 text-dark-text"></i>
                                                            <span className="font-bold text-dark-text">Cerrar Sesión</span>
                                                    </Dropdown.Link> */}
                                                    <Link href={route('logout')} method="post" as="button">
                                                        <i className="pi pi-power-off mr-2 text-dark-text"></i>
                                                        <span className="font-bold text-dark-text">Cerrar Sesión</span>
                                                    </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                    </Sidebar>
                    <Button className='bg-dark-primary text-dark-text border-none'  icon="pi pi-bars" onClick={() => setVisible(true)} />
                </div>
            </div>
        </>
    )
}
        