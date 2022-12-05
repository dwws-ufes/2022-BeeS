import { Inject, Service } from "typedi";
import { Brackets, DeleteResult, In, InsertResult, Like, Repository, UpdateResult } from "typeorm";
import AppError from "../../customError/customAppError";
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
        name = name !== undefined && name !== "undefined" ? name : ""
        return await this.repo.createQueryBuilder("beehive")
            .select(["beehive.id", "beehive.name",
                "admins.id", "admins.name", "admins.email",
                "owner.id", "owner.name", "owner.email"])
            .leftJoin("beehive.admins", "admins")
            .innerJoin("beehive.owner", "owner")
            .where("beehive.name LIKE :name", { name: `%${name}%` })
            .andWhere(new Brackets((qb) => qb.where("owner.email = :email", { email }).orWhere("admins.email = :email", { email })))
            .skip(pageNo)
            .take(pageSize)
            .orderBy("beehive.name", "ASC")
            .getMany()
    }

    async createBeehive(name: string, ownerEmail: string, adminsEmail?: string[]){
        const owner = await this.beeRepo.findOneBy({email: ownerEmail})
        const admins = await this.beeRepo.findBy({email: In(adminsEmail || [])})
        if(owner === null){
            throw new AppError("This user does not exist", 404)
        }
        if(admins.length === 0 && adminsEmail !== undefined){
            throw new AppError("Some admins do not have a account", 404)
        }
        const beehiveInsert = await this.repo.insert({
            name,
            owner
        })
        const insertRows = admins.map((bee) => ({
            bee_id: bee.id,
            beehive_id: beehiveInsert.identifiers[0].id
        }))
        const relationInsert = await this.dataSource.dataSource.createQueryBuilder()
            .insert()
            .into("bee_admin_beehive")
            .values(insertRows)
            .execute()
        return [beehiveInsert, relationInsert]
    }

    async updateBeehive(id: number, name?: string, adminsEmail?: string[]){
        let results: {
            delete: DeleteResult | undefined,
            insertAdmins: InsertResult | undefined,
            update: UpdateResult | undefined
        } = {
            delete: undefined,
            insertAdmins: undefined,
            update: undefined
        }
        if(adminsEmail){
            const admins = await this.beeRepo.findBy({email: In(adminsEmail || [])})
            if(admins.length !== adminsEmail.length){
                throw new AppError("Some or all admins are not registered", 404)
            }
            const deleteRes = await this.dataSource.dataSource.createQueryBuilder()
                .from("bee_admin_beehive", "admins")
                .delete()
                .where("bee_admin_beehive.beehive_id = :id", { id })
                .execute()
            
            const insertRows = admins.map((bee) => ({
                bee_id: bee.id,
                beehive_id: id
            }))
            const adminsInsertRes = await this.dataSource.dataSource.createQueryBuilder()
                .insert()
                .into("bee_admin_beehive")
                .values(insertRows)
                .execute()
            results.delete = deleteRes
            results.insertAdmins = adminsInsertRes
        }

        if(name){
            const updateRes = await this.repo.update(id, {
                name
            })
            results.update = updateRes
        }
        return results
    }

    async getBeehiveById(id: number, email: string){
        return await this.repo.createQueryBuilder("beehive")
            .leftJoin("beehive.admins", "admins")
            .innerJoin("beehive.owner", "owner")
            .select(["beehive.id", "beehive.name", "owner.id", "owner.name", "owner.email", "admins.id", "admins.name", "admins.email"])
            .where("beehive.id = :id", { id })
            .andWhere(new Brackets((qb) => qb.where("owner.email = :email", { email }).orWhere("admins.email = :email", { email })))
            .getOne()
    }

    async deleteBeehive(id: number){
        return await this.repo.delete({ id })
    }
}