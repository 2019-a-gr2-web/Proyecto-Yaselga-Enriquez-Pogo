import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { DetalleEntity } from "./detalle.entity";
import { detalleController } from "./detalle.controller";
import { DetalleService } from "./detalle.service";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                DetalleEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [detalleController], // Controladores
    providers: [DetalleService], // Servicios
    exports: [DetalleService] // Exportar Servicios
})
export class DetalleModule {
}