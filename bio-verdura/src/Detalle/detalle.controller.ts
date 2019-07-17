import { Controller, Get, Post, Delete, Put, Res, Query, Param, Body } from "@nestjs/common";
import { Detalle } from "./detalle";
import { DetalleService } from "./detalle.service";

@Controller('/bioverdura/detalle')
export class detalleController {

    constructor(
        private readonly _detalleService:DetalleService
    ) {}

    @Post('crear') 
    async creardetalle(
        @Body('cantidad') cantidad:Number,
        @Body('precio') precio:Number,
        @Body('producto') producto: Number,
        @Body('factura') factura: Number,
        @Res() res
    ){
        const detalle:Detalle = {
            cantidad:cantidad,
            precio:precio,
            producto_id: producto,
            factura_id: factura
        }
        try{
            const resCrear = await this._detalleService.crear(detalle)
            res.send({mensaje:'Registro Ingresado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
    }

    @Get('listar')
    async listardetalles(
        @Res() res,
        @Query() query
    ){
        let arraydetalles
        if(query.nombre)
            arraydetalles = await this._detalleService.buscar({nombre:query.nombre})
        else
            arraydetalles = await this._detalleService.buscar()
        //redirect
    }

    @Delete('eliminar/:id')
    async eliminardetalles(
        @Res() res,
        @Param() param,
    ){
        
        try{
            const idP:Number = Number(param.id)
            const resEliminar = await this._detalleService.eliminar({id:idP})
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
        @Body('cantidad') cantidad:Number,
        @Body('precio') precio:Number,
        @Body('producto') producto: Number,
        @Body('factura') factura: Number,
        @Res() res
    ){
        try{
            const detalle:Detalle = {
                cantidad:cantidad,
                precio:precio,
                producto_id: producto,
                factura_id: factura
            }
            const idP:Number = Number(param.id)
            const resActualizar = await this._detalleService.actualizar(detalle,{id:idP})
            res.send({mensaje:'Registro Actualizado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
        
    }

}