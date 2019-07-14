import { Entity, Generated, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ProductoEntity } from "src/Producto/producto.entity";
import { PedidoEntity } from "src/Pedido/pedido.entity";

@Entity('Detalle_ped') // Nombre tabla
export class DetallePedEntity {
    @PrimaryGeneratedColumn()
    num_linea_ped:Number

    @Column()
    cantidad:Number
    
    @Column()
    precio:Number
    
    @ManyToOne(type => ProductoEntity, producto => producto.detallesPed)
    producto: ProductoEntity

 //   @ManyToOne(type => PedidoEntity, pedido => pedido.detallesPed)
 //   pedido: PedidoEntity
}