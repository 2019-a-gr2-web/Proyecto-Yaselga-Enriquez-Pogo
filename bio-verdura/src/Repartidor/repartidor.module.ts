import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { RepartidorEntity } from "./repartidor.entity";
import { repartidorController } from "./repartidor.controller";
import { RepartidorService } from "./repartidor.service";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                RepartidorEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [repartidorController], // Controladores
    providers: [RepartidorService], // Servicios
    exports: [RepartidorService] // Exportar Servicios
})
export class RepartidorModule {
}