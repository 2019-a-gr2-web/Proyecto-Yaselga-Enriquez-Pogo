import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProveedorEntity } from "./proveedor.entity";
import { Repository } from "typeorm";
import { Proveedor } from "./proveedor";

@Injectable()
export class ProveedorService {
    constructor(
        @InjectRepository(ProveedorEntity)
        private readonly _proveedorRepository: Repository<ProveedorEntity>
    ){}

    crear(nuevoproveedor: Proveedor):Promise<Proveedor> {
        
        const objetoEntidad = this._proveedorRepository.create(nuevoproveedor)
        return this._proveedorRepository.save(objetoEntidad);
    }

    buscar(parametros?){
        return this._proveedorRepository.find(parametros)
    }

    eliminar(parametros){
        this._proveedorRepository.delete(parametros)
    }

    actualizar(nuevoproveedor: Proveedor, parametros){
        this._proveedorRepository.update(parametros,nuevoproveedor)
    }

}