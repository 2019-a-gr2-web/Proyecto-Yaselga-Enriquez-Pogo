import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ProductoEntity } from "src/Producto/producto.entity";
import { FacturaEntity } from "src/Factura/factura.entity";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

@Entity('Detalle') // Nombre tabla
export class DetalleEntity {
    @PrimaryGeneratedColumn()
    num_linea:Number

    @Column()
    cantidad:Number
    
    @Column()
    precio:Number

    @Column()
    producto_id: Number

    @Column()
    factura_id: Number
    
    @ManyToOne(type => ProductoEntity, producto => producto.detalles)
    @JoinColumn({name: 'producto_id'})
    producto: ProductoEntity

    @ManyToOne(type => FacturaEntity, factura => factura.detalles)
    @JoinColumn({name: 'factura_id'})
    factura: FacturaEntity
}