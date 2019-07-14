import { Entity, Generated, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { type } from "os";
import { ProductoEntity } from "src/Producto/producto.entity";
import { FacturaEntity } from "src/Factura/factura.entity";

@Entity('Detalle') // Nombre tabla
export class DetalleEntity {
    @PrimaryGeneratedColumn()
    num_linea:Number

    @Column()
    cantidad:Number
    
    @Column()
    precio:Number
    
    @ManyToOne(type => ProductoEntity, producto => producto.detalles)
    producto: ProductoEntity

    @ManyToOne(type => FacturaEntity, factura => factura.detalles)
    factura: FacturaEntity
}