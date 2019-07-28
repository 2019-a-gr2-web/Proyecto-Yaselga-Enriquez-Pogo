import { Controller, Get, Post, Delete, Put, Res, Query, Param, Body } from "@nestjs/common";
import { Proveedor } from "./proveedor";
import { ProveedorService } from "./proveedor.service";

@Controller('/bioverdura/proveedor')
export class proveedorController {

    constructor(
        private readonly _proveedorService:ProveedorService
    ) {}

    @Post('crear') 
    async crearproveedor(
        @Body('nombre_prod') nom_prov:String,
        @Body('tipo_prod') tel_prov:String,
        @Body('especie_prod') estado_prov:boolean,
        @Res() res
    ){
        const proveedor:Proveedor = {
            nom_prov: nom_prov,
            tel_prov:tel_prov,
            estado_prov:estado_prov
        }
        try{
            const resCrear = await this._proveedorService.crear(proveedor)
            res.send({mensaje:'Registro Ingresado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
    }

    @Get('listar')
    async listarproveedors(
        @Res() res,
        @Query() query
    ){
        let arrayproveedors
        if(query.nombre)
            arrayproveedors = await this._proveedorService.buscar({nombre:query.nombre})
        else
            arrayproveedors = await this._proveedorService.buscar()
        //redirect
    }

    @Delete('eliminar/:id')
    async eliminarproveedors(
        @Res() res,
        @Param() param,
    ){
        
        try{
            const idP:Number = Number(param.id)
            const resEliminar = await this._proveedorService.eliminar({id:idP})
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
        @Body('nombre_prod') nom_prov:String,
        @Body('tipo_prod') tel_prov:String,
        @Body('especie_prod') estado_prov:boolean,
        @Res() res
    ){
        try{
            const proveedor:Proveedor = {
                nom_prov: nom_prov,
                tel_prov:tel_prov,
                estado_prov:estado_prov
            }
            const idP:Number = Number(param.id)
            const resActualizar = await this._proveedorService.actualizar(proveedor,{id:idP})
            res.send({mensaje:'Registro Actualizado',codigo:200})
        }catch(e){
            console.error(e);
            res.status(500);
            res.send({mensaje:'Error',codigo:500});
        }
        
    }

}