import { Router } from "express";
import Container from "typedi";
import ensureAuth from "../customMiddleware/ensureAuth";
import jwtSign from "../customMiddleware/jwtSign";
import { HoneycombService } from "../service/HoneycombService";

export const honeycombRoutes = Router()

const beeService = Container.get(HoneycombService)

honeycombRoutes.all("*", jwtSign ,ensureAuth)
