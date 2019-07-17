import { Controller, Get, Post, Delete, Put, Res, Query, Param, Body } from "@nestjs/common";
import { DetallePed } from "./detallePed";
import { DetallePedService } from "./detallePed.service";

@Controller('/bioverdura/detallePed')
export class detallePedController {

    constructor(
        private readonly _detallePedService:DetallePedService
    ) {}

    @Post('crear') 
    async creardetallePed(
        @Body('cantidad') cantidad:Number,
        @Body('precio') precio:Number,
        @Body('producto') producto: Number,
        @Body('pedido') pedido: Number,
        @Res() res
    ){
        const detallePed:DetallePed = {
            cantidad:cantidad,
            precio:precio,
            producto_id: producto,
            pedido_id: pedido
        }
        try{
            const resCrear = await this._detallePedService.crear(detallePed)
            res.send({mensaje:'Registro Ingresado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
    }

    @Get('listar')
    async listardetallePeds(
        @Res() res,
        @Query() query
    ){
        let arraydetallePeds
        if(query.nombre)
            arraydetallePeds = await this._detallePedService.buscar({nombre:query.nombre})
        else
            arraydetallePeds = await this._detallePedService.buscar()
        //redirect
    }

    @Delete('eliminar/:id')
    async eliminardetallePeds(
        @Res() res,
        @Param() param,
    ){
        
        try{
            const idP:Number = Number(param.id)
            const resEliminar = await this._detallePedService.eliminar({id:idP})
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
        @Body('pedido') pedido: Number,
        @Res() res
    ){
        try{
            const detallePed:DetallePed = {
                cantidad:cantidad,
                precio:precio,
                producto_id: producto,
                pedido_id: pedido
            }
            const idP:Number = Number(param.id)
            const resActualizar = await this._detallePedService.actualizar(detallePed,{id:idP})
            res.send({mensaje:'Registro Actualizado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
        
    }

}