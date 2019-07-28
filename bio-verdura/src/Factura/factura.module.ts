import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { FacturaEntity } from "./factura.entity";
import { facturaController } from "./factura.controller";
import { FacturaService } from "./factura.service";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                FacturaEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [facturaController], // Controladores
    providers: [FacturaService], // Servicios
    exports: [FacturaService] // Exportar Servicios
})
export class FacturaModule {
}