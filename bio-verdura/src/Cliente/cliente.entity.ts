import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, PrimaryColumn} from "typeorm";
import { FacturaEntity } from "src/Factura/factura.entity";
import { PedidoEntity } from "src/Pedido/pedido.entity";

@Entity('cliente') // Nombre tabla
export class ClienteEntity {
    @PrimaryColumn()
    ci_cli:String;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'nombre',
    })
    nom_cli: string;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'apell_cli',
    })
    apellido: string;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'tel_cli',
    })
    telefono: string;

    @Column({
        type: 'varchar',
        length: 30,
        name: 'correo_cli',
    })
    correo: string;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'dir_calle_prin',
    })
    direccion_callePrincipal:string;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'dir_calle_sec',
    })
    direccion_calleSecundaria:string;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'dir_num',
    })
    direccion_numero:string;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'dir_sect',
    })
    direccion_sector:string;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'dir_ref',
    })
    direccion_referencia:string;

    @OneToMany( type => FacturaEntity, factura => factura)
    facturas: FacturaEntity[]

   // @OneToMany( type => PedidoEntity, pedido => pedido)
 //   pedidos: PedidoEntity[]



}