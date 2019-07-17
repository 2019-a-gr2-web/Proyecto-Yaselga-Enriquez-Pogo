import { Controller, Get, Post, Delete, Put, Res, Query, Param, Body } from "@nestjs/common";
import { Factura } from "./factura";
import { FacturaService } from "./factura.service";

@Controller('/bioverdura/factura')
export class facturaController {

    constructor(
        private readonly _facturaService:FacturaService
    ) {}

    @Post('crear') 
    async crearfactura(
        @Body('total_ped') total_ped: Number,
        @Body('fecha_realizacion') fecha_realizacion:Date,
        @Body('fecha_entrega') fecha_entrega:Date,
        @Body('cliente') cliente: String,
        @Res() res
    ){
        const factura:Factura = {
            total_ped: total_ped,
            fecha_realizacion:fecha_realizacion,
            fecha_entrega:fecha_entrega,
            cliente_id: cliente
        }
        try{
            const resCrear = await this._facturaService.crear(factura)
            res.send({mensaje:'Registro Ingresado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
    }

    @Get('listar')
    async listarfacturas(
        @Res() res,
        @Query() query
    ){
        let arrayfacturas
        if(query.nombre)
            arrayfacturas = await this._facturaService.buscar({nombre:query.nombre})
        else
            arrayfacturas = await this._facturaService.buscar()
        //redirect
    }

    @Delete('eliminar/:id')
    async eliminarfacturas(
        @Res() res,
        @Param() param,
    ){
        
        try{
            const idP:Number = Number(param.id)
            const resEliminar = await this._facturaService.eliminar({id:idP})
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
        @Body('total_ped') total_ped: Number,
        @Body('fecha_realizacion') fecha_realizacion:Date,
        @Body('fecha_entrega') fecha_entrega:Date,
        @Body('cliente') cliente: String,
        @Res() res
    ){
        try{
            const factura:Factura = {
                total_ped: total_ped,
                fecha_realizacion:fecha_realizacion,
                fecha_entrega:fecha_entrega,
                cliente_id: cliente
            }
            const idP:Number = Number(param.id)
            const resActualizar = await this._facturaService.actualizar(factura,{id:idP})
            res.send({mensaje:'Registro Actualizado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
        
    }

}