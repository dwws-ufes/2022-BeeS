import { Request, Response, NextFunction } from "express";
import { Request as JWTRequest } from "express-jwt"
import { Inject, Service } from "typedi";
import { BeehiveRepository } from "../persistence/repositoies/BeehiveRepository";
import { BeeRepository } from "../persistence/repositoies/BeeRepository";

@Service()
class BeehiveService{
    @Inject()
    beehiveRepo!: BeehiveRepository

    @Inject()
    beeRepo!: BeeRepository

    async create(req: JWTRequest, res: Response, next: NextFunction){
        try{
            const auth = req.auth
            if(auth === undefined || auth === null){
                return res.status(401).send({
                    status: "ERROR",
                    message: "No token found"
                })
            }
            const user = await this.beeRepo.getBeeByEmail(auth.email)
            if(user === null){
                return res.status(401).send({
                    status: "ERROR",
                    message: "Token invalid"
                })
            }
            const { name, admins } = req.body
            this.beehiveRepo.createBeehive(name, user.email, admins)
            return res.send({
                status: "OK",
                message: "Beehive created"
            })
        }catch(e){
            console.log(e)
            return res.status(500).send(e)
        }
    }

    async get(req: JWTRequest, res: Response, next: NextFunction){
        try{
            const auth = req.auth
            if(auth === undefined || auth === null){
                return res.status(401).send({
                    status: "ERROR",
                    message: "No token found"
                })
            }
            const user = await this.beeRepo.getBeeByEmail(auth.email)
            if(user === null){
                return res.status(401).send({
                    status: "ERROR",
                    message: "Token invalid"
                })
            }
            const { pageNo, pageSize, name } = req.body
            const beehives = await this.beehiveRepo.getBeehivesOfUser(user.email, pageNo, pageSize, name)
            return res.send({
                status: "OK",
                beehives
            })
        }catch(e){
            console.error(e)
            return res.status(500).send(e)
        }
    }

    async update(req: JWTRequest, res: Response, next: NextFunction){
        try{
            const auth = req.auth
            if(auth === undefined || auth === null){
                return res.status(401).send({
                    status: "ERROR",
                    message: "No token found"
                })
            }
            const user = await this.beeRepo.getBeeByEmail(auth.email)
            if(user === null){
                return res.status(401).send({
                    status: "ERROR",
                    message: "Token invalid"
                })
            }
            const { id, name, admins } = req.body
            await this.beehiveRepo.updateBeehive(id, name, admins)
        }catch(e){
            console.error(e)
            return res.status(500).send(e)
        }
    }

    async delete(req: JWTRequest, res: Response, next: NextFunction){
        
    }
}