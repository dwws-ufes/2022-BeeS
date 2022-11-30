import { NextFunction, Response } from "express";
import { Request as JWTRequest } from "express-jwt";
import { Inject, Service } from "typedi";
import { HoneycombRepository } from "../persistence/repositoies/HoneycombRepository";

@Service()
class HoneycombService{
    @Inject()
    HoneycombRepo!: HoneycombRepository

    async create(req: JWTRequest, res: Response, next: NextFunction){
        
    }

    async get(req: JWTRequest, res: Response, next: NextFunction){

    }

    async update(req: JWTRequest, res: Response, next: NextFunction){

    }

    async delete(req: JWTRequest, res: Response, next: NextFunction){

    }
}