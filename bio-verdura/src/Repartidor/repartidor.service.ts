import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RepartidorEntity } from "./repartidor.entity";
import { Repository } from "typeorm";
import { Repartidor } from "./repartidor";

@Injectable()
export class RepartidorService {
    constructor(
        @InjectRepository(RepartidorEntity)
        private readonly _repartidorRepository: Repository<RepartidorEntity>
    ){}

    crear(nuevorepartidor: Repartidor):Promise<Repartidor> {
        
        const objetoEntidad = this._repartidorRepository.create(nuevorepartidor)
        return this._repartidorRepository.save(objetoEntidad);
    }

    buscar(parametros?){
        return this._repartidorRepository.find(parametros)
    }

    eliminar(parametros){
        this._repartidorRepository.delete(parametros)
    }

    actualizar(nuevorepartidor: Repartidor, parametros){
        this._repartidorRepository.update(parametros,nuevorepartidor)
    }

}