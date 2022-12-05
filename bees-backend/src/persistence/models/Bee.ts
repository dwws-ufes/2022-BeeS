import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne } from "typeorm"
import { Beehive } from "./Beehive"
import { Log } from "./Log"

@Entity({ name: "bee" })
export class Bee {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({ unique: true })
    email!: string

    @Column()
    password!: string

    @OneToMany(() => Beehive, (beehive) => beehive.owner)
    beehivesOwned!: Beehive[]

    @OneToMany(() => Log, (log) => log.bee)
    logs!: Log[]

    @ManyToMany(() => Beehive, (bee) => bee.admins)
    @JoinTable({
        name: "bee_admin_beehive",
        joinColumn: {
            name: "bee_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "beehive_id",
            referencedColumnName: "id"
        }
    })
    beehivesAdmin!: Beehive[]
}