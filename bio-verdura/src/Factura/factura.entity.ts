import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ClienteEntity } from "src/Cliente/cliente.entity";
import { DetalleEntity } from "src/Detalle/detalle.entity";

@Entity('Factura') 
export class FacturaEntity {
    @PrimaryGeneratedColumn()
    id_fac:number;

    @Column()
    total_ped: Number

    @Column()
    fecha_realizacion:Date

    @Column()
    fecha_entrega:Date

    @ManyToOne(type => ClienteEntity, cliente => cliente.facturas)
    cliente: ClienteEntity;

    @OneToMany(type => DetalleEntity, detalle => detalle.factura)
    detalles: DetalleEntity[];
}