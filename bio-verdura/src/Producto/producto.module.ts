import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ProductoEntity } from "./producto.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                ProductoEntity
            ],
            'default'
        ),
    ],  // Modulos
    controllers: [], // Controladores
    providers: [], // Servicios
    exports: [] // Exportar Servicios
})
export class ProductoModule {
}