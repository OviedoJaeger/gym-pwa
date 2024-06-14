import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function BotonConfirmacion({onConfirm, ...props}) {
    const toast = useRef(null);

    const accept = () => {
        onConfirm();
        toast.current.show({ severity: 'info', summary: 'Éxito', detail: 'El mensaje ha sido enviado', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Cancelado', detail: 'Se ha cancelado el envio', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: '¿Deseas Enviar el Mensaje?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Enviar" className="ml-2"></Button>
            </div>
        </>
    )
}
