import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './Cliente/cliente.entity';
import { PedidoEntity } from './Pedido/pedido.entity';
import { FacturaEntity } from './Factura/factura.entity';
import { FacturaModule } from './Factura/factura.module';
import { ClienteModule } from './Cliente/cliente.module';
import { PedidoModule } from './Pedido/pedido.module';
import { DetalleEntity } from './Detalle/detalle.entity';
import { DetallePedEntity } from './DetallePed/detallePed.entity';
import { ProductoEntity } from './Producto/producto.entity';
import { ProveedorEntity } from './Proveedor/proveedor.entity';
import { RepartidorEntity } from './Repartidor/repartidor.entity';
import { DetallePedModule } from './DetallePed/detallePed.module';
import { ProductoModule } from './Producto/producto.module';
import { DetalleModule } from './Detalle/detalle.module';
import { ProveedorModule } from './Proveedor/proveedor.module';
import { RepartidorModule } from './Repartidor/repartidor.module';
import {LoginModule} from './Login/login.module';


@Module({
  imports: [
      LoginModule,
    ClienteModule,
    PedidoModule,
    FacturaModule,
    DetalleModule,
    DetallePedModule,
    ProductoModule,
    ProveedorModule,
    RepartidorModule,
    TypeOrmModule.forRoot({
        name: 'default', // Nombre cadena conex por defecto de TYPEORM
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Sistemas.2019',
        database: 'bio_verdura',
        entities: [
            ClienteEntity,
            PedidoEntity,
            FacturaEntity,
            DetalleEntity,
            DetallePedEntity,
            ProductoEntity,
            ProveedorEntity,
            RepartidorEntity,
        ],
        synchronize: false,
        insecureAuth : true,
        dropSchema: false,
    }),
  ], // Modulos
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
