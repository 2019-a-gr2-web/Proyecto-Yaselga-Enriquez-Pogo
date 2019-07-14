import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { DetallePedEntity } from "./detallePed.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                DetallePedEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [], // Controladores
    providers: [], // Servicios
    exports: [] // Exportar Servicios
})
export class DetallePedModule {
}