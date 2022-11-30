import { NextFunction, Request, Response } from "express";
import { Inject, Service } from "typedi";
import { BeeRepository } from "../persistence/repositoies/BeeRepository";
const jwt = require('jsonwebtoken');

@Service()
class BeeService{
    @Inject()
    beeRepo!: BeeRepository

    async register(req: Request, res: Response, next: NextFunction){
        const {name, email, password} = req.body
        try{
            await this.beeRepo.createBee(name, email, password)
            return res.send({
                status: "OK",
                message: "User created"
            })
        }catch(e){
            console.error(e)
            res.status(500).send(e)
        }
    }

    async login(req: Request, res: Response, next: NextFunction){
        const {email, password} = req.body
        try{
            const user = await this.beeRepo.getBeeLogin(email, password)
            if(user === null){
                return res.status(401).send({
                    status: "ERROR",
                    message: "Authentication failed"
                })
            }
            return res.send({
                status: "OK",
                jwt: jwt.sign({
                    email,
                    id: user.id
                }, process.env['JWT_SECRET'])
            })
        }catch(e){
            console.error(e)
            res.status(500).send(e)
        }
    }
}