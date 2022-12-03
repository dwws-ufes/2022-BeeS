import { Router } from "express";
import Container from "typedi";
import ensureAuth from "../customMiddleware/ensureAuth";
import jwtSign from "../customMiddleware/jwtSign";
import { BeehiveService } from "../service/BeehiveService";

export const beehiveRoutes = Router()

const beehiveService = Container.get(BeehiveService)

beehiveRoutes.all("*", jwtSign, ensureAuth)

