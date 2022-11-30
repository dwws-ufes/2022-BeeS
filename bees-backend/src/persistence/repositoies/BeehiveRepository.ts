import { Inject, Service } from "typedi";
import { In, Like, Repository } from "typeorm";
import { DataSourceClass } from "../connectionConfig";
import { Bee } from "../models/Bee";
import { Beehive } from "../models/Beehive";

@Service()
export class BeehiveRepository {
    repo: Repository<Beehive>
    beeRepo: Repository<Bee>


    constructor(public dataSource: DataSourceClass){
        this.repo = dataSource.dataSource.getRepository(Beehive)
        this.beeRepo = dataSource.dataSource.getRepository(Bee)
    }

    async getBeehivesOfUser(email: string, pageNo: number, pageSize: number, name?: string){
        return await this.repo.find({
            select: {
                name: true,
                id: true
            },
            where: [
                {
                    owner: {
                        email
                    },
                    name: name ? Like(`%${name}%`) : undefined
                },
                {
                    admins: {
                        email
                    },
                    name: name ? Like(`%${name}%`) : undefined
                },
            ],
            relations: {
                owner: true,
                admins: true
            },
            take: pageSize,
            skip: pageNo
        })
    }

    async createBeehive(name: string, ownerEmail: string, adminsEmail?: string[]){
        const insResult = await this.repo.insert({
            name,
            owner: () => ownerEmail
        })
        if(adminsEmail){
            const admins = await this.beeRepo.findBy({email: In(adminsEmail)})
            const upResult = await this.repo.update({id: insResult.identifiers[0].id}, {
                admins
            })
            return {upResult, insResult}
        }
        return insResult
    }

    async updateBeehive(id: number, name?: string, adminsEmail?: string[]){
        if(adminsEmail){
            const admins = await this.beeRepo.findBy({email: In(adminsEmail)})
            return await this.repo.update(id, {
                name,
                admins: admins
            })
        }
        return await this.repo.update(id, {
            name
        })
    }
}