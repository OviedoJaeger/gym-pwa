import { useState, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import MenuInferior from '@/Components/Sidebar/MenuInferior';


export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
            <div className="min-h-screen bg-dark-primary text-dark-text">

                
                
                <nav className="">
                    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-5">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <div className="pt-2 pb-3 space-y-1">
                                        
                                        <ResponsiveNavLink>
                                        </ResponsiveNavLink>
                                    </div>
                                    {user.name}
                                    
                                </div>

                                

                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink href={route('inicio')} active={route().current('inicio')}>
                                        Inicio
                                    </NavLink>
                                    <NavLink href={route('comentarios.index')} active={route().current('comentarios')}>
                                        Comentarios
                                    </NavLink>
                                    <NavLink href={route('comentarios.index')} active={route().current('comentarios')}>
                                        Etc
                                    </NavLink>
                                </div>
                            </div>
                            

                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                
                                <div className="ms-3 relative">
                                    
                                            <span className="inline-flex rounded-md">
                                                <Link href="/">
                                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                                </Link>

                                            </span>
                                </div>
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <Link href="/inicio">
                                    <ApplicationLogo className="block h-7 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                
                    

                {header && (
                    <header className="bg-dark-primary shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>

                <div className="sm:hidden">
                    <MenuInferior/>
                </div>
            </div>
    );
}
