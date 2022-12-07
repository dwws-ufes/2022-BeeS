import { NextFunction, Response } from "express";
import { Request as JWTRequest } from "express-jwt";
import { Inject, Service } from "typedi";
import AppError from "../customError/customAppError";
import { BeehiveRepository } from "../persistence/repositoies/BeehiveRepository";
import { BeeRepository } from "../persistence/repositoies/BeeRepository";
import { HoneycombRepository } from "../persistence/repositoies/HoneycombRepository";

@Service()
export class HoneycombService{
    @Inject()
    honeycombRepo!: HoneycombRepository

    @Inject()
    beeRepo!: BeeRepository

    @Inject()
    beehiveRepo!: BeehiveRepository

    create(){
        return async (req: JWTRequest, res: Response, next: NextFunction) => {
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
                const { beehive, sku, name, description, quantity, expiry } = req.body
                const beehiveObj = await this.beehiveRepo.getBeehiveById(beehive, user.email)
                if(beehiveObj === null){
                    return res.status(401).json({
                        status: "ERROR",
                        message: "Not authorized to create honeycomb in this beehive"
                    })
                }
                await this.honeycombRepo.createHoneycomb(beehive, sku, name, description, quantity, new Date(expiry))
                return res.send({
                    status: "OK",
                    message: "Honeycomb created"
                })
            }catch(e){
                console.error(e)
                if(e instanceof AppError){ return res.status(e.code).send({status: "ERROR", message: e.message}) }else{ return res.status(500).send({status: "error", message: (e as Error).message}) }
            }
        }
    }

    get(){
        return async (req: JWTRequest, res: Response, next: NextFunction) => {
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
                const { id, beehiveId } = req.params
                const beehive = await this.beehiveRepo.getBeehiveById(Number(beehiveId), user.email)
                if(beehive === null){
                    return res.status(401).json({
                        status: "ERROR",
                        message: "Unauthorized to get honeycombs from this beehive"
                    })
                }
                const honeycomb = await this.honeycombRepo.getHoneycombById(id, Number(beehiveId))
                if(honeycomb === null){
                    return res.status(404).json({
                        status: "ERROR",
                        message: "Honeycomb not found"
                    })
                }
                return res.send({
                    status: "OK",
                    honeycomb
                })
            }catch(e){
                console.error(e)
                if(e instanceof AppError){ return res.status(e.code).send({status: "ERROR", message: e.message}) }else{ return res.status(500).send({status: "error", message: (e as Error).message}) }
            }
        }
    }

    update(){
        return async (req: JWTRequest, res: Response, next: NextFunction) => {
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
                const { id, beehiveId } = req.params
                const {sku, name, description, quantity, expiry} = req.body
                await this.honeycombRepo.updateHoneycomb(Number(beehiveId), id, sku, name, description, quantity, expiry)
                return res.status(200).send({
                    status: "OK",
                    message: "Honeycomb Updated"
                })
            }catch(e){
                console.error(e)
                if(e instanceof AppError){ return res.status(e.code).send({status: "ERROR", message: e.message}) }else{ return res.status(500).send({status: "error", message: (e as Error).message}) }
            }
        }

    }

    delete(){
        return async (req: JWTRequest, res: Response, next: NextFunction) => {
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
                const { id, beehiveId } = req.params
                await this.honeycombRepo.deleteHoneycomb(Number(beehiveId), id)
                return res.status(200).send({
                    status: "OK",
                    message: `${id} deleted`
                })
            }catch(e){
                console.error(e)
                if(e instanceof AppError){ return res.status(e.code).send({status: "ERROR", message: e.message}) }else{ return res.status(500).send({status: "error", message: (e as Error).message}) }
            }
        }

    }
}