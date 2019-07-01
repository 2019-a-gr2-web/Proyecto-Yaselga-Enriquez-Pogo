import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Pedido') 
export class PedidoEntity {
    @PrimaryGeneratedColumn()
    id:number;
}