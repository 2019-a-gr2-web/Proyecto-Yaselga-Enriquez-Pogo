import { Controller, Get, Post, Delete, Put, Res, Query, Param, Body } from "@nestjs/common";
import { Producto } from "./producto";
import { ProductoService } from "./producto.service";

@Controller('/bioverdura/producto')
export class productoController {

    constructor(
        private readonly _productoService:ProductoService
    ) {}

    @Post('crear') 
    async crearproducto(
        @Body('nombre_prod') nombre_prod:String,
        @Body('tipo_prod') tipo_prod:String,
        @Body('especie_prod') especie_prod:String,
        @Body('precio_prod') precio_prod:Number,
        @Body('estado_prod') estado_prod:Boolean,
        @Body('proveedor') proveedor: number,
        @Res() res
    ){
        const producto:Producto = {
            nombre_prod: nombre_prod,
            tipo_prod:especie_prod,
            especie_prod:especie_prod,
            precio_prod: precio_prod,
            estado_prod:estado_prod,
            proveedor_id:proveedor
        }
        try{
            const resCrear = await this._productoService.crear(producto)
            res.send({mensaje:'Registro Ingresado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
    }

    @Get('listar')
    async listarproductos(
        @Res() res,
        @Query() query
    ){
        let arrayproductos
        if(query.nombre)
            arrayproductos = await this._productoService.buscar({nombre:query.nombre})
        else
            arrayproductos = await this._productoService.buscar()
        //redirect
    }

    @Delete('eliminar/:id')
    async eliminarproductos(
        @Res() res,
        @Param() param,
    ){
        
        try{
            const idP:Number = Number(param.id)
            const resEliminar = await this._productoService.eliminar({id:idP})
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
        @Body('nombre_prod') nombre_prod:String,
        @Body('tipo_prod') tipo_prod:String,
        @Body('especie_prod') especie_prod:String,
        @Body('precio_prod') precio_prod:Number,
        @Body('estado_prod') estado_prod:Boolean,
        @Body('proveedor') proveedor: number,
        @Res() res
    ){
        try{
            const producto:Producto = {
                nombre_prod: nombre_prod,
                tipo_prod:especie_prod,
                especie_prod:especie_prod,
                precio_prod: precio_prod,
                estado_prod:estado_prod,
                proveedor_id:proveedor
            }
            const idP:Number = Number(param.id)
            const resActualizar = await this._productoService.actualizar(producto,{id:idP})
            res.send({mensaje:'Registro Actualizado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
        
    }

}