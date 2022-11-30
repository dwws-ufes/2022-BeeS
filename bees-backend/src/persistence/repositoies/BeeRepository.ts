import { Inject, Service } from "typedi";
import { Raw, Repository } from "typeorm";
import { DataSourceClass } from "../connectionConfig";
import { Bee } from "../models/Bee";

@Service()
export class BeeRepository {
    repo: Repository<Bee>

    @Inject()
    dataSource!: DataSourceClass

    constructor(){
        this.repo = this.dataSource.dataSource.getRepository(Bee)
    }

    async getBeeLogin(email: string, password: string){
        return await this.repo.findOne({
            select: {
                name: true,
                id: true,
                email: true
            },
            where: {
                email,
                password: Raw((alias) => `${alias} = crypt('${password}', password)`)
            }
        })
    }

    async getBeeByEmail(email: string){
        return await this.repo.findOne({
            select: {
                name: true,
                id: true,
                email: true
            },
            where: {
                email
            }
        })
    }

    async createBee(name: string, email: string, password: string){
        return await this.repo.insert({
            name,
            email,
            password: () => `crypt('${password}', gen_salt('bf'))`
        })
    }
}