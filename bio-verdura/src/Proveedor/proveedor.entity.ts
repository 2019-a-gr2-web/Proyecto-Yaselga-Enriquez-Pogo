import { Entity, Generated, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToMany } from "typeorm";
import { ProductoEntity } from "src/Producto/producto.entity";

@Entity('Proveedor') // Nombre tabla
export class ProveedorEntity {
    @PrimaryGeneratedColumn()
    id_prov:String

    @Column()
    nom_prov:String

    @Column()
    tel_prov:String

    @Column()
    estado_prov:boolean

    @OneToMany(type => ProductoEntity, producto => producto.proveedor)
    productos: ProductoEntity[]
}