import { Router } from "express";
import Container from "typedi";
import ensureAuth from "../customMiddleware/ensureAuth";
import jwtSign from "../customMiddleware/jwtSign";
import { LogService } from "../service/LogService";

export const logRoutes = Router()

const beeService = Container.get(LogService)

logRoutes.all("*", jwtSign, ensureAuth)



