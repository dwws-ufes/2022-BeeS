import { NextFunction, Response } from "express";
import { Request as JWTRequest } from "express-jwt";
import { Inject, Service } from "typedi";
import { BeeRepository } from "../persistence/repositoies/BeeRepository";
import { HoneycombRepository } from "../persistence/repositoies/HoneycombRepository";

@Service()
export class HoneycombService{
    @Inject()
    honeycombRepo!: HoneycombRepository

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
            const { beehiveId, sku, name, description, quantity, expiry } = req.body
            await this.honeycombRepo.createHoneycomb(beehiveId, sku, name, description, quantity, new Date(expiry))
            return res.send({
                status: "OK",
                message: "Honeycomb created"
            })
        }catch(e){
            console.error(e)
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
        }catch(e){
            console.error(e)
            return res.status(500).send(e)
        }
    }

    async getHoneycombsOfBeehive(req: JWTRequest, res: Response, next: NextFunction){
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
            const { beehiveId, name, pageNo, pageSize } = req.body
            const honeycombs = await this.honeycombRepo.getHoneycombsOfBeehive(beehiveId, pageNo, pageSize, name)
            return res.send({
                status: "OK",
                honeycombs
            })
        }catch(e){
            console.error(e)
            return res.status(500).send(e)
        }
    }

    async update(req: JWTRequest, res: Response, next: NextFunction){

    }

    async delete(req: JWTRequest, res: Response, next: NextFunction){

    }
}