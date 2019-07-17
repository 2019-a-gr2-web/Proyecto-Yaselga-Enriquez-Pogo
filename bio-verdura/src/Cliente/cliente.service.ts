import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClienteEntity } from "./cliente.entity";
import { Repository } from "typeorm";
import { Cliente } from "./cliente";

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(ClienteEntity)
        private readonly _clienteRepository: Repository<ClienteEntity>
    ){}

    crear(nuevoCliente: Cliente):Promise<Cliente> {
        
        const objetoEntidad = this._clienteRepository.create(nuevoCliente)
        return this._clienteRepository.save(objetoEntidad);
    }

    buscar(parametros?){
        return this._clienteRepository.find(parametros)
    }

    eliminar(parametros){
        this._clienteRepository.delete(parametros)
    }

    actualizar(nuevaCliente: Cliente, parametros){
        this._clienteRepository.update(parametros,nuevaCliente)
    }

}