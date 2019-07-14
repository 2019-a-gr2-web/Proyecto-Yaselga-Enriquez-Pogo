import { Entity, Generated, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { DetallePedEntity } from "src/DetallePed/detallePed.entity";
import { DetalleEntity } from "src/Detalle/detalle.entity";
import { type } from "os";
import { ProveedorEntity } from "src/Proveedor/proveedor.entity";

@Entity('Producto') // Nombre tabla
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id_prod:number

    @Column()
    nombre_prod:String

    @Column()
    tipo_prod:String

    @Column()
    especie_prod:String

    @Column()
    precio_prod:Number

    @Column()
    estado_prod:Boolean

    @OneToMany(type => DetallePedEntity, detallePed => detallePed.producto)
    detallesPed:DetallePedEntity[]

    @OneToMany(type => DetalleEntity, detalle => detalle.producto)
    detalles:DetalleEntity[]

    @ManyToOne(type => ProveedorEntity, proveedor => proveedor.productos)
    proveedor: ProductoEntity
}