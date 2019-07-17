import { Entity, Generated, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ProductoEntity } from "src/Producto/producto.entity";
import { PedidoEntity } from "src/Pedido/pedido.entity";

@Entity('detallePed_ped') // Nombre tabla
export class DetallePedEntity {
    @PrimaryGeneratedColumn()
    num_linea_ped:Number

    @Column()
    cantidad:Number
    
    @Column()
    precio:Number

    @Column()
    producto_id:Number

    @Column()
    pedido_id:Number
    
    @ManyToOne(type => ProductoEntity, producto => producto.detallesPed)
    @JoinColumn({name: 'producto_id'})
    producto: ProductoEntity

    @ManyToOne(type => PedidoEntity, pedido => pedido.detallesPed)
    @JoinColumn({name: 'pedido_id'})
    pedido: PedidoEntity
}