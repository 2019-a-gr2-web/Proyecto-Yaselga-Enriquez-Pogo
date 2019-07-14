import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ProveedorEntity } from "./proveedor.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                ProveedorEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [], // Controladores
    providers: [], // Servicios
    exports: [] // Exportar Servicios
})
export class ProveedorModule {
}