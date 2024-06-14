import React, { useState, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from 'primereact/dropdown';
import InputError from "@/Components/InputError";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';


const Index = ({auth}) => {

    const textarea = useRef(null);
    const motiveInput = useRef(null);
    const toast = useRef(null);
    const [value, setValue] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Sugerencia'},
        { name: 'Comentario'},
        { name: 'Queja'},
        { name: 'Otro'},
    ];

    const initialValues = {
        motive: "",
        description: "",
        username: auth.user.name
    }

    

    const {data, errors, setData, post, reset} = useForm(initialValues)


    const submit = (e) => {
        e.preventDefault();
        post(route('comentarios.store'),{
            onSuccess:() => { ok() },
            onError:() => { errorForm() },
        });
    }

    const errorForm = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'El mensaje no puedo ser enviado, intentelo de nuevo más tarde.', life: 4000 });
    }

    const resetForm = () => {
        // Accede a las propiedades y métodos del elemento
        textarea.current.value = '';
        motiveInput.current.value = '';
        setValue('');
        setSelectedCity('');
    };


    const ok = () =>{
        reset();
        resetForm();
        toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'El mensaje ha sido enviado.', life: 3000 });

    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-dark-text leading-tight">
                        Comentarios / Sugerencias
                    </h2>
                    <Link href={route('inicio')}>Inicio</Link>
                </div>
                
            }
        >
            <Head title="Inicio" />

            <div className="py-0 bg-dark-primary text-dark-text">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-dark-text">
                            
                            <hr className="mt-5 mb-5"/>

                            <h6 className="text-yellow-500">TUS COMENTARIOS SON COMPLETAMENTE ANÓNIMOS.</h6>

                            <h6 className="text-dark-text">Tu opinión es muy importante para mejorar nuestra calidad de servicio.</h6>

                            <hr className="mt-5 mb-5"/>
                            <form id="formulario" onSubmit={submit}>

                            <input type="hidden" id="username" name="username" value={auth.user.name}
                            onChange={(e) => setData(
                                "username",
                                e.target.value
                            )}/>

                                <div className="card flex justify-content-center mt-7">
                                    <FloatLabel>
                                        <Dropdown value={selectedCity}
                                            id="motive"
                                            ref={motiveInput}
                                            name="motive"
                                            type="text"
                                            onChange={(e) => {setSelectedCity(e.value);
                                                setData('motive', e.value['name']);
                                            }}
                                            options={cities} 
                                            optionLabel="name"
                                            placeholder="Selecciona el motivo" 
                                            className="w-full md:w-14rem bg-dark-primary text-dark-text" />
                                            <label htmlFor="" className="">Seleciona el Motivo</label>
                                    </FloatLabel>

                                </div>
                                    <div className="card flex justify-content-center mb-7">
                                        <InputError message={errors.motive} className="mt-2"/>
                                    </div>

                                <div className="card flex justify-content-center">
                                    <FloatLabel>
                                        <InputTextarea id="description"
                                            name="description"
                                            ref={textarea}
                                            type = "text"
                                            value={value}
                                            onChange={(e) => {setValue(e.target.value);
                                                setData('description', e.target.value);
                                                
                                            }} 
                                            rows={5} cols={35} autoResize
                                            maxLength={250}
                                            className="bg-dark-primary text-dark-text"
                                        />
                                        <label htmlFor="description" 
                                            className="">Descripción
                                        </label>
                                    </FloatLabel>
                                    
                                </div>
                                <div className="card flex justify-content-center mb-7">
                                    <InputError message={errors.description} className="mt-2"/>
                                </div>

                                <Toast ref={toast} />
                                <ConfirmDialog />
                                <Button className="" label="Enviar" icon="pi pi-check"  iconPos="right" />

                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
