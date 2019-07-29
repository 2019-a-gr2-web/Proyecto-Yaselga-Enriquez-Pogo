import { Controller, Get, Post, Delete, Put, Res, Query, Param, Body } from "@nestjs/common";
import { Cliente } from "./cliente";
import { ClienteService } from "./cliente.service";
import { stringify } from "querystring";

@Controller('/bioverdura/cliente')
export class ClienteController {

    constructor(
        private readonly _clienteService:ClienteService
    ) {}

    @Post('crear') 
    async crearCliente(
        @Body('id') id:string,
        @Body('nombre') nombre:string,
        @Body('apellido') apellido:string,
        @Body('telefono') telefono:string,
        @Body('correo') correo:string,
        @Body('direccion_callePrincipal') direccion_callePrincipal:string,
        @Body('direccion_calleSecundaria') direccion_calleSecundaria:string,
        @Body('direccion_numero') direccion_numero:string,
        @Body('direccion_sector') direccion_sector:string,
        @Body('direccion_referencia') direccion_referencia:string,
        @Body('password') password: string,
        @Res() res
    ){
        const Cliente:Cliente = {
            ci_cli: id,
            nombre: nombre,
            apellido:apellido,
            telefono:telefono,
            correo:correo,
            password:password,
            direccion_callePrincipal:direccion_callePrincipal,
            direccion_calleSecundaria:direccion_calleSecundaria,
            direccion_numero:direccion_numero,
            direccion_sector:direccion_sector,
            direccion_referencia:direccion_referencia
        }
        try{
            const resCrear = await this._clienteService.crear(Cliente)
            res.send({mensaje:'Registro Ingresado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
    }

    @Get('listar')
    async listarClientes(
        @Res() res,
        @Query() query
    ){
        let arrayClientes
        if(query.nombre)
            arrayClientes = await this._clienteService.buscar({nombre:query.nombre})
        else
            arrayClientes = await this._clienteService.buscar()
        //redirect
    }

    @Delete('eliminar/:id')
    async eliminarClientes(
        @Res() res,
        @Param() param,
    ){
        
        try{
            const idP:Number = Number(param.id)
            const resEliminar = await this._clienteService.eliminar({id:idP})
            res.send({mensaje:'Registro Eliminado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
    }

    @Put('actualizar/:id')
    async actualizar(
        @Param() param,
        @Body('id') id:String,
        @Body('nombre') nombre:string,
        @Body('apellido') apellido:string,
        @Body('telefono') telefono:string,
        @Body('correo') correo:string,
        @Body('direccion_callePrincipal') direccion_callePrincipal:string,
        @Body('direccion_calleSecundaria') direccion_calleSecundaria:string,
        @Body('direccion_numero') direccion_numero:string,
        @Body('direccion_sector') direccion_sector:string,
        @Body('direccion_referencia') direccion_referencia:string,
        @Body('password') password: string,
        @Res() res
    ){
        try{
            const Cliente:Cliente = {
                ci_cli: id,
                nombre: nombre,
                apellido:apellido,
                telefono:telefono,
                correo:correo,
                password:password,
                direccion_callePrincipal:direccion_callePrincipal,
                direccion_calleSecundaria:direccion_calleSecundaria,
                direccion_numero:direccion_numero,
                direccion_sector:direccion_sector,
                direccion_referencia:direccion_referencia
            }
            const idP:Number = Number(param.id)
            const resActualizar = await this._clienteService.actualizar(Cliente,{id:idP})
            res.send({mensaje:'Registro Actualizado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
        
    }

}