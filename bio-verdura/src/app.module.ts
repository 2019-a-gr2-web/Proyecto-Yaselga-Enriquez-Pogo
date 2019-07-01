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

@Module({
  imports: [
    ClienteModule,
    PedidoModule,
    FacturaModule,
    TypeOrmModule.forRoot({
        name: 'default', // Nombre cadena conex por defecto de TYPEORM
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'bio_verdura',
        entities: [
            ClienteEntity,
            PedidoEntity,
            FacturaEntity
        ],
        synchronize: true,
        insecureAuth : true,
        dropSchema: false
    }),
  ], // Modulos
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
