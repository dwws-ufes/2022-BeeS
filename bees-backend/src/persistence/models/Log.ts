import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
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
    @JoinColumn({ name: "bee" })
    bee!: Bee

    @ManyToOne(() => Honeycomb, (honeycomb) => honeycomb.logs)
    @JoinColumn([
        {
            name: "honeycomb"
        },{
            name: "beehive"
        }
    ])
    honeycomb!: Honeycomb
}