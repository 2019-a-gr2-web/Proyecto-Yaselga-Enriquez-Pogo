import { Controller, Get, Post, Delete, Put, Res, Query, Param, Body } from "@nestjs/common";
import { Repartidor } from "./repartidor";
import { RepartidorService } from "./repartidor.service";

@Controller('/bioverdura/repartidor')
export class repartidorController {

    constructor(
        private readonly _repartidorService:RepartidorService
    ) {}

    @Post('crear') 
    async crearrepartidor(
        @Body('ci_rep') ci_rep:String,
        @Body('nom_rep') nom_rep:String,
        @Body('apell_rep') apell_rep:String,
        @Body('tel_rep') tel_rep:String,
        @Body('estado_rep') estado_rep:boolean,
        @Res() res
    ){
        const repartidor:Repartidor = {
            ci_rep: ci_rep,
            nom_rep:nom_rep,
            apell_rep:apell_rep,
            tel_rep:tel_rep,
            estado_rep:estado_rep
        }
        try{
            const resCrear = await this._repartidorService.crear(repartidor)
            res.send({mensaje:'Registro Ingresado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
    }

    @Get('listar')
    async listarrepartidors(
        @Res() res,
        @Query() query
    ){
        let arrayrepartidors
        if(query.nombre)
            arrayrepartidors = await this._repartidorService.buscar({nombre:query.nombre})
        else
            arrayrepartidors = await this._repartidorService.buscar()
        //redirect
    }

    @Delete('eliminar/:id')
    async eliminarrepartidors(
        @Res() res,
        @Param() param,
    ){
        
        try{
            const idP:Number = Number(param.id)
            const resEliminar = await this._repartidorService.eliminar({id:idP})
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
        @Body('ci_rep') ci_rep:String,
        @Body('nom_rep') nom_rep:String,
        @Body('apell_rep') apell_rep:String,
        @Body('tel_rep') tel_rep:String,
        @Body('estado_rep') estado_rep:boolean,
        @Res() res
    ){
        try{
            const repartidor:Repartidor = {
                ci_rep: ci_rep,
                nom_rep:nom_rep,
                apell_rep:apell_rep,
                tel_rep:tel_rep,
                estado_rep:estado_rep
            }
            const idP:Number = Number(param.id)
            const resActualizar = await this._repartidorService.actualizar(repartidor,{id:idP})
            res.send({mensaje:'Registro Actualizado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
        
    }

}