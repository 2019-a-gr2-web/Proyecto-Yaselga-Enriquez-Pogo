import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DetalleEntity } from "./detalle.entity";
import { Repository } from "typeorm";
import { Detalle } from "./detalle";

@Injectable()
export class DetalleService {
    constructor(
        @InjectRepository(DetalleEntity)
        private readonly _detalleRepository: Repository<DetalleEntity>
    ){}

    crear(nuevoDetalle: Detalle):Promise<Detalle> {
        
        const objetoEntidad = this._detalleRepository.create(nuevoDetalle)
        return this._detalleRepository.save(objetoEntidad);
    }

    buscar(parametros?){
        return this._detalleRepository.find(parametros)
    }

    eliminar(parametros){
        this._detalleRepository.delete(parametros)
    }

    actualizar(nuevoDetalle: Detalle, parametros){
        this._detalleRepository.update(parametros,nuevoDetalle)
    }

}