import { Router } from "express";
import Container from "typedi";
import ensureAuth from "../customMiddleware/ensureAuth";
import jwtSign from "../customMiddleware/jwtSign";
import { HoneycombService } from "../service/HoneycombService";

export const honeycombRoutes = Router()

const honeycombService = Container.get(HoneycombService)

honeycombRoutes.all("*", jwtSign ,ensureAuth)

honeycombRoutes.post("/", honeycombService.create())

honeycombRoutes.get("/:id/:beehiveId", honeycombService.get())

honeycombRoutes.put("/:id/:beehiveId", honeycombService.update())