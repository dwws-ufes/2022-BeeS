import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinColumn } from "typeorm"
import { Bee } from "./Bee"
import { Honeycomb } from "./Honeycomb"

@Entity({ name: "beehive" })
export class Beehive {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @ManyToOne(() => Bee, (bee) => bee.beehivesOwned)
    @JoinColumn({ name: "owner" })
    owner!: Bee

    @ManyToMany(() => Bee, (bee) => bee.beehivesAdmin)
    admins!: Bee[]

    @OneToMany(() => Honeycomb, (honeycomb) => honeycomb.beehive)
    items!: Honeycomb[]
}