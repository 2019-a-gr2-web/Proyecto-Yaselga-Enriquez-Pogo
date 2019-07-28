import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { DetallePedEntity } from "./detallePed.entity";
import { detallePedController } from "./detallePed.controller";
import { DetallePedService } from "./detallePed.service";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                DetallePedEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [detallePedController], // Controladores
    providers: [DetallePedService], // Servicios
    exports: [DetallePedService] // Exportar Servicios
})
export class DetallePedModule {
}