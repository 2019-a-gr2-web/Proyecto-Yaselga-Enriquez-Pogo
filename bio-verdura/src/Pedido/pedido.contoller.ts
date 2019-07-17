import { Controller, Get, Post, Delete, Put, Res, Query, Param, Body } from "@nestjs/common";
import { Pedido } from "./pedido";
import { PedidoService } from "./pedido.service";

@Controller('/bioverdura/pedido')
export class pedidoController {

    constructor(
        private readonly _pedidoService:PedidoService
    ) {}

    @Post('crear') 
    async crearpedido(
        @Body('total_ped') total_ped: number,
        @Body('fecha_realizacion_ped') fecha_realizacion_ped: Date,
        @Body('fecha_entrega') fecha_entrega: Date,
        @Body('cliente') cliente: String,
        @Body('repartidor') repartidor: String,
        @Res() res
    ){
        const pedido:Pedido = {
            total_ped: total_ped,
            fecha_realizacion_ped:fecha_realizacion_ped,
            fecha_entrega:fecha_entrega,
            cliente_id: cliente,
            repartidor_id:repartidor
        }
        try{
            const resCrear = await this._pedidoService.crear(pedido)
            res.send({mensaje:'Registro Ingresado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
    }

    @Get('listar')
    async listarpedidos(
        @Res() res,
        @Query() query
    ){
        let arraypedidos
        if(query.nombre)
            arraypedidos = await this._pedidoService.buscar({nombre:query.nombre})
        else
            arraypedidos = await this._pedidoService.buscar()
        //redirect
    }

    @Delete('eliminar/:id')
    async eliminarpedidos(
        @Res() res,
        @Param() param,
    ){
        
        try{
            const idP:Number = Number(param.id)
            const resEliminar = await this._pedidoService.eliminar({id:idP})
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
        @Body('total_ped') total_ped: number,
        @Body('fecha_realizacion_ped') fecha_realizacion_ped: Date,
        @Body('fecha_entrega') fecha_entrega: Date,
        @Body('cliente') cliente: String,
        @Body('repartidor') repartidor: String,
        @Res() res
    ){
        try{
            const pedido:Pedido = {
                total_ped: total_ped,
                fecha_realizacion_ped:fecha_realizacion_ped,
                fecha_entrega:fecha_entrega,
                cliente_id: cliente,
                repartidor_id:repartidor
            }
            const idP:Number = Number(param.id)
            const resActualizar = await this._pedidoService.actualizar(pedido,{id:idP})
            res.send({mensaje:'Registro Actualizado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
        
    }

}