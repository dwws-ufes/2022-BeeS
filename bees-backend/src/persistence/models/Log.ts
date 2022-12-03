import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Bee } from "./Bee"
import { Honeycomb } from "./Honeycomb"

export enum EditType {
    ADDED,
    DESC_EDITED,
    QTD_EDITED
}

@Entity({ name: "log" })
export class Log {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    type!: EditType

    @ManyToOne(() => Bee, (bee) => bee.logs)
    bee!: Bee

    @ManyToOne(() => Honeycomb, (honeycomb) => honeycomb.logs)
    honeycomb!: Honeycomb
}