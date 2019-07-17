import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PedidoEntity } from "./pedido.entity";
import { Repository } from "typeorm";
import { Pedido } from "./pedido";

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(PedidoEntity)
        private readonly _pedidoRepository: Repository<PedidoEntity>
    ){}

    crear(nuevopedido: Pedido):Promise<Pedido> {
        
        const objetoEntidad = this._pedidoRepository.create(nuevopedido)
        return this._pedidoRepository.save(objetoEntidad);
    }

    buscar(parametros?){
        return this._pedidoRepository.find(parametros)
    }

    eliminar(parametros){
        this._pedidoRepository.delete(parametros)
    }

    actualizar(nuevopedido: Pedido, parametros){
        this._pedidoRepository.update(parametros,nuevopedido)
    }

}