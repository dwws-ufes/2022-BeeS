import { Router } from "express";
import Container from "typedi";
import ensureAuth from "../customMiddleware/ensureAuth";
import jwtSign from "../customMiddleware/jwtSign";
import { BeehiveService } from "../service/BeehiveService";

export const beehiveRoutes = Router()

const beehiveService = Container.get(BeehiveService)

beehiveRoutes.all("*", jwtSign, ensureAuth)

beehiveRoutes.post("/", beehiveService.create())

beehiveRoutes.get("/", beehiveService.getBeehives())

beehiveRoutes.get("/:id", beehiveService.getBeehive())

beehiveRoutes.get("/:id/honeycombs", beehiveService.getHoneycombsOfBeehive())

beehiveRoutes.put("/:id", beehiveService.update())

beehiveRoutes.delete("/:id", beehiveService.delete())