import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { Beehive } from "./Beehive"
import { Log } from "./Log"

@Entity({ name: "honeycomb" })
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
    @JoinColumn({ name: "beehive" })
    beehive!: Beehive

    @OneToMany(() => Log, (log) => log.honeycomb)
    logs!: Log[]
}