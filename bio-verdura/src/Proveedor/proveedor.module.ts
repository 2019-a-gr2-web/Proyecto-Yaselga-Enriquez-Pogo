import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ProveedorEntity } from "./proveedor.entity";
import { proveedorController } from "./proveedor.controller";
import { ProveedorService } from "./proveedor.service";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                ProveedorEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [proveedorController], // Controladores
    providers: [ProveedorService], // Servicios
    exports: [ProveedorService] // Exportar Servicios
})
export class ProveedorModule {
}