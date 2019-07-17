import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FacturaEntity } from "./factura.entity";
import { Repository } from "typeorm";
import { Factura } from "./factura";

@Injectable()
export class FacturaService {
    constructor(
        @InjectRepository(FacturaEntity)
        private readonly _facturaRepository: Repository<FacturaEntity>
    ){}

    crear(nuevofactura: Factura):Promise<Factura> {
        
        const objetoEntidad = this._facturaRepository.create(nuevofactura)
        return this._facturaRepository.save(objetoEntidad);
    }

    buscar(parametros?){
        return this._facturaRepository.find(parametros)
    }

    eliminar(parametros){
        this._facturaRepository.delete(parametros)
    }

    actualizar(nuevofactura: Factura, parametros){
        this._facturaRepository.update(parametros,nuevofactura)
    }

}