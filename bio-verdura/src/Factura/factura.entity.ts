import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Factura') 
export class FacturaEntity {
    @PrimaryGeneratedColumn()
    id:number;
}