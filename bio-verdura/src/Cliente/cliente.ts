export interface Cliente {
    id: number;
    nombre: string;
    apellido:string;
    telefono:string;
    correo:string;

    direccion_callePrincipal:string;
    direccion_calleSecundaria:string;
    direccion_numero:string;
    direccion_sector:string;
    direccion_referencia:string;
}