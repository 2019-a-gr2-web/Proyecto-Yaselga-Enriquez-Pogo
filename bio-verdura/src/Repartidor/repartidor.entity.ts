import { Entity, Generated, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToMany } from "typeorm";
import { PedidoEntity } from "src/Pedido/pedido.entity";

@Entity('repartidor') // Nombre tabla
export class RepartidorEntity {
    @PrimaryColumn()
    ci_rep:String

    @Column()
    nom_rep:String
    
    @Column()
    apell_rep:String

    @Column()
    tel_rep:String

    @Column()
    estado_rep:boolean

    @OneToMany(type => PedidoEntity, pedido => pedido.repartidor)
    pedidos: PedidoEntity[]

    
}