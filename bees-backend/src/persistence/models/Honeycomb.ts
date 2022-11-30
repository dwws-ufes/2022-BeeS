import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany, ManyToOne } from "typeorm"
import { Beehive } from "./Beehive"
import { Log } from "./Log"

@Entity()
export class Honeycomb {
    @PrimaryColumn()
    sku!: string

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    quantity!: number

    @Column()
    expiry!: Date

    @Column()
    dateIn!: Date

    @Column()
    dateOut!: Date

    @ManyToOne(() => Beehive, (beehive) => beehive.items)
    beehive!: Beehive

    @OneToMany(() => Log, (log) => log.honeycomb)
    logs!: Log[]
}