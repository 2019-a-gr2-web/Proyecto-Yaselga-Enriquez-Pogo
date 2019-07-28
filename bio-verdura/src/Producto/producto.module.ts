import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ProductoEntity } from "./producto.entity";
import { productoController } from "./producto.controller";
import { ProductoService } from "./producto.service";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                ProductoEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [productoController], // Controladores
    providers: [ProductoService], // Servicios
    exports: [ProductoService] // Exportar Servicios
})
export class ProductoModule {
}