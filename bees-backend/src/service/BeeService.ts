import { NextFunction, Request, Response } from "express";
import { Inject, Service } from "typedi";
import AppError from "../customError/customAppError";
import { BeeRepository } from "../persistence/repositoies/BeeRepository";
const jwt = require('jsonwebtoken');

@Service()
export class BeeService{
    @Inject()
    beeRepo!: BeeRepository

    register(){
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log("Registering bee")
            const {name, email, password} = req.body
            try{
                await this.beeRepo.createBee(name, email, password)
                console.log("Bee created")
                return res.send({
                    status: "OK",
                    message: "User created"
                })
            }catch(e){
                if((e as Error).message.includes("duplicate")){
                    e = new AppError("Email already exists", 400)
                }
                if(e instanceof AppError){ return res.status(e.code).send({status: "ERROR", message: e.message}) }else{ return res.status(500).send({status: "error", message: (e as Error).message}) }
            }
        }
    }

    login(){
        return async (req: Request, res: Response, next: NextFunction) => {
            const {email, password} = req.body
            console.log("Login in bee")
            try{
                const user = await this.beeRepo.getBeeLogin(email, password)
                if(user === null){
                    console.log("Bee not found")
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Authentication failed"
                    })
                }
                console.log("Bee logged in")
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
}