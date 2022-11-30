import { Router } from "express";
import Container from "typedi";
import { BeeService } from "../service/BeeService";

export const beeRoutes = Router()

const beeService = Container.get(BeeService)


beeRoutes.post("/register", beeService.register)

beeRoutes.post("/login", beeService.login)