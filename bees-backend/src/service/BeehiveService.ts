import { Response, NextFunction } from "express";
import { Request as JWTRequest } from "express-jwt"
import { Inject, Service } from "typedi";
import AppError from "../customError/customAppError";
import { BeehiveRepository } from "../persistence/repositoies/BeehiveRepository";
import { BeeRepository } from "../persistence/repositoies/BeeRepository";
import { HoneycombRepository } from "../persistence/repositoies/HoneycombRepository";

@Service()
export class BeehiveService{
    @Inject()
    beehiveRepo!: BeehiveRepository

    @Inject()
    honeycombRepo!: HoneycombRepository

    @Inject()
    beeRepo!: BeeRepository

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
                const { name, admins } = req.body
                await this.beehiveRepo.createBeehive(name, user.email, admins)
                return res.send({
                    status: "OK",
                    message: "Beehive created"
                })
            }catch(e){
                console.log(e)
                if(e instanceof AppError){ return res.status(e.code).send({status: "ERROR", message: e.message}) }else{ return res.status(500).send({status: "error", message: (e as Error).message}) }
            }
        }
    }

    getBeehives(){
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
                const { pageNo, pageSize, name } = req.query
                const beehives = await this.beehiveRepo.getBeehivesOfUser(user.email, Number(pageNo), Number(pageSize), String(name))
                return res.send({
                    status: "OK",
                    beehives
                })
            }catch(e){
                console.error(e)
                if(e instanceof AppError){ return res.status(e.code).send({status: "ERROR", message: e.message}) }else{ return res.status(500).send({status: "error", message: (e as Error).message}) }
            }
        }
    }

    getBeehive(){
        return async (req: JWTRequest, res: Response, next: NextFunction) => {
            try{
                const auth = req.auth
                const user = await this.beeRepo.getBeeByEmail(auth!.email)
                if(user === null){
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Token invalid"
                    })
                }
                const { id } = req.params
                const response = await this.beehiveRepo.getBeehiveById(Number(id), user.email)
                return res.send({
                    status: "OK",
                    beehive: response
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
                const { id } = req.params
                const beehive = this.beehiveRepo.getBeehiveById(Number(id), user.email)
                if(beehive === null){
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Unauthorized to update this beehive"
                    })
                }
                const { name, admins } = req.body
                await this.beehiveRepo.updateBeehive(Number(id), name, admins)
                return res.send({
                    status: "OK",
                    message: "Beehive updated"
                })
            }catch(e){
                console.error(e)
                if(e instanceof AppError){ return res.status(e.code).send({status: "ERROR", message: e.message}) }else{ return res.status(500).send({status: "error", message: (e as Error).message}) }
            }
        }
    }

    getHoneycombsOfBeehive(){
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
                const { id } = req.params
                const beehive = await this.beehiveRepo.getBeehiveById(Number(id), user.email)
                if(beehive === null){
                    return res.status(401).json({
                        status: "ERROR",
                        message: "Unauthorized to get honeycombs from this beehive"
                    })
                }
                const { name, pageNo, pageSize } = req.query
                const honeycombs = await this.honeycombRepo.getHoneycombsOfBeehive(Number(id), Number(pageNo), Number(pageSize), String(name))
                return res.send({
                    status: "OK",
                    honeycombs
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
                const { id } = req.params
                const beehive = await this.beehiveRepo.getBeehiveById(Number(id), user.email)
                if(beehive === null){
                    return res.status(401).json({
                        status: "ERROR",
                        message: "Unauthorized to get honeycombs from this beehive"
                    })
                }
                await this.beehiveRepo.deleteBeehive(Number(id))
                return res.status(200).send({
                    status: "OK",
                    message: "Beehive deleted"
                })
            }catch(e){
                console.error(e)
                if(e instanceof AppError){ return res.status(e.code).send({status: "ERROR", message: e.message}) }else{ return res.status(500).send({status: "error", message: (e as Error).message}) }
            }
        }
    }
}