import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ClienteEntity } from "src/Cliente/cliente.entity";
import { RepartidorEntity } from "src/Repartidor/repartidor.entity";
import { DetallePedEntity } from "src/DetallePed/detallePed.entity";

@Entity('Pedido') 
export class PedidoEntity {
    @PrimaryGeneratedColumn()
    id_ped:number;

    @Column()
    total_ped: number;

    @Column()
    fecha_realizacion_ped: Date

    @Column()
    fecha_entrega: Date
//
   // @ManyToOne(type => ClienteEntity, cliente => cliente.pedidos)
   // cliente: ClienteEntity

   // @ManyToOne(type => RepartidorEntity, repartidor => repartidor.pedidos)
    //repartidor: RepartidorEntity

    //@OneToMany(type => DetallePedEntity, detallePed => detallePed.pedido)
    //detallesPed: DetallePedEntity[]

}