import { Router } from "express";
import Container from "typedi";
import ensureAuth from "../customMiddleware/ensureAuth";
import { BeehiveService } from "../service/BeehiveService";

export const beehiveRoutes = Router()

const beehiveService = Container.get(BeehiveService)

beehiveRoutes.all("*", ensureAuth)

