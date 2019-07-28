import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
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

    @Column()
    cliente_id:String

    @Column()
    repartidor_id:String

    @ManyToOne(type => ClienteEntity, cliente => cliente.pedidos)
    @JoinColumn({name: 'cliente_id'})
    cliente: ClienteEntity

    @ManyToOne(type => RepartidorEntity, repartidor => repartidor.pedidos)
    @JoinColumn({name: 'repartidor_id'})
    repartidor: RepartidorEntity

    @OneToMany(type => DetallePedEntity, detallePed => detallePed.pedido)
    detallesPed: DetallePedEntity[]

}