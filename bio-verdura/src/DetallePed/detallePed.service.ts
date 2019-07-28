import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DetallePedEntity } from "./detallePed.entity";
import { Repository } from "typeorm";
import { DetallePed } from "./detallePed";

@Injectable()
export class DetallePedService {
    constructor(
        @InjectRepository(DetallePedEntity)
        private readonly _detallePedRepository: Repository<DetallePedEntity>
    ){}

    crear(nuevoDetallePed: DetallePed):Promise<DetallePed> {
        
        const objetoEntidad = this._detallePedRepository.create(nuevoDetallePed)
        return this._detallePedRepository.save(objetoEntidad);
    }

    buscar(parametros?){
        return this._detallePedRepository.find(parametros)
    }

    eliminar(parametros){
        this._detallePedRepository.delete(parametros)
    }

    actualizar(nuevoDetallePed: DetallePed, parametros){
        this._detallePedRepository.update(parametros,nuevoDetallePed)
    }

}