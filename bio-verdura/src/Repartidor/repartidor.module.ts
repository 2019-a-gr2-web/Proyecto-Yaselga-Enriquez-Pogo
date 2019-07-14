import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { RepartidorEntity } from "./repartidor.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                RepartidorEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [], // Controladores
    providers: [], // Servicios
    exports: [] // Exportar Servicios
})
export class RepartidorModule {
}