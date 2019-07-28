import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductoEntity } from "./producto.entity";
import { productoController} from "./producto.controller";
import { Repository } from "typeorm";
import { Producto } from "./producto";

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(ProductoEntity)
        private readonly _productoRepository: Repository<ProductoEntity>
    ){}

    crear(nuevoproducto: Producto):Promise<Producto> {
        
        const objetoEntidad = this._productoRepository.create(nuevoproducto)
        return this._productoRepository.save(objetoEntidad);
    }

    buscar(parametros?){
        return this._productoRepository.find(parametros)
    }

    eliminar(parametros){
        this._productoRepository.delete(parametros)
    }

    actualizar(nuevoproducto: Producto, parametros){
        this._productoRepository.update(parametros,nuevoproducto)
    }

}
