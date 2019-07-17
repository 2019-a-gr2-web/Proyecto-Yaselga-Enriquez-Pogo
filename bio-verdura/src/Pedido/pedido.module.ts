import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { PedidoEntity } from "./pedido.entity";
import { pedidoController } from "./pedido.contoller";
import { PedidoService } from "./pedido.service";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                PedidoEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [pedidoController], // Controladores
    providers: [PedidoService], // Servicios
    exports: [PedidoService] // Exportar Servicios
})
export class PedidoModule {
}