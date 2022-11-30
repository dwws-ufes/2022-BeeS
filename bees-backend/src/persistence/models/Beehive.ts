import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from "typeorm"
import { Bee } from "./Bee"
import { Honeycomb } from "./Honeycomb"

@Entity()
export class Beehive {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @ManyToOne(() => Bee, (bee) => bee.beehivesOwned)
    owner!: Bee

    @ManyToMany(() => Bee, (bee) => bee.beehivesAdmin, { cascade: true })
    admins!: Bee[]

    @OneToMany(() => Honeycomb, (honeycomb) => honeycomb.beehive)
    items!: Honeycomb[]
}