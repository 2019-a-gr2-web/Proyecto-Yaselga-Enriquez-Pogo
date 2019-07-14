import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { PedidoEntity } from "./pedido.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                PedidoEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [], // Controladores
    providers: [], // Servicios
    exports: [] // Exportar Servicios
})
export class PedidoModule {
}