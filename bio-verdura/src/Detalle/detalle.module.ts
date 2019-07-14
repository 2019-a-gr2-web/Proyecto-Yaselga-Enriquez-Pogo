import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { DetalleEntity } from "./detalle.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                DetalleEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [], // Controladores
    providers: [], // Servicios
    exports: [] // Exportar Servicios
})
export class DetalleModule {
}