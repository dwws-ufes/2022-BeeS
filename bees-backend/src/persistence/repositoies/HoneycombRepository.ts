import { Inject, Service } from "typedi";
import { Like, Repository } from "typeorm";
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
        return await this.repo.insert({
            sku,
            name,
            description,
            quantity,
            expiry,
            dateIn: new Date(),
            beehive: beehive!
        })
    }

    async getHoneycombById(sku: string){
        return await this.repo.findOneBy({sku})
    }

    async getHoneycombsOfBeehive(beehiveId: number, pageNo: number, pageSize: number, name?: string){
        return await this.repo.find({
            where: {
                beehive: {
                    id: beehiveId
                },
                name: name ? Like(`%${name}%`) : undefined
            },
            take: pageNo,
            skip: pageSize
        })
    }
}