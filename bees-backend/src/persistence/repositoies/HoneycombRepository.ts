import { Inject, Service } from "typedi";
import { Like, Repository } from "typeorm";
import AppError from "../../customError/customAppError";
import { DataSourceClass } from "../connectionConfig";
import { Beehive } from "../models/Beehive";
import { Honeycomb } from "../models/Honeycomb";

@Service()
export class HoneycombRepository {
    repo: Repository<Honeycomb>
    beehiveRepo: Repository<Beehive>


    constructor(public dataSource: DataSourceClass){
        this.repo = dataSource.dataSource.getRepository(Honeycomb)
        this.beehiveRepo = dataSource.dataSource.getRepository(Beehive)
    }

    async createHoneycomb(beehiveId: number, sku: string, name: string, description: string, quantity: number, expiry: Date){
        const beehive = await this.beehiveRepo.findOneBy({id: beehiveId})
        if(beehive === null){
            throw new AppError("Beehive not found", 404)
        }
        console.log(beehive.id, beehiveId)
        return await this.repo.insert({
            sku,
            name,
            description,
            quantity,
            expiry,
            dateIn: new Date(),
            beehive
        })
    }

    async getHoneycombById(sku: string, beehiveId: number){
        return await this.repo.findOneBy({sku, beehive: { id: beehiveId }})
    }

    async getHoneycombsOfBeehive(beehiveId: number, pageNo: number, pageSize: number, name?: string){
        name = name === undefined || name === "undefined" ? "" : name
        name = `%${name}%`
        return await this.repo.createQueryBuilder("honeycomb")
            .select()
            .innerJoin("honeycomb.beehive", "beehive")
            .take(pageSize)
            .skip(pageNo)
            .where("beehive.id = :id" , { id: beehiveId })
            .andWhere("honeycomb.name LIKE :name", { name })
            .getMany()
    }

    async deleteHoneycomb(beehiveId: number, sku: string){
        return await this.repo.delete({ beehive: { id: beehiveId }, sku })
    }

    async updateHoneycomb(beehiveId: number, sku: string, newSku?: string, name?: string, description?: string, quantity?: number, expiry?: Date){
        return await this.repo.update({ beehive: { id: beehiveId }, sku }, {
            sku: newSku,
            name,
            description,
            expiry,
            quantity
        })
    }
}