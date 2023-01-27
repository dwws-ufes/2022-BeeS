"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.honeycombRoutes = void 0;
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const ensureAuth_1 = __importDefault(require("../customMiddleware/ensureAuth"));
const jwtSign_1 = __importDefault(require("../customMiddleware/jwtSign"));
const HoneycombService_1 = require("../service/HoneycombService");
exports.honeycombRoutes = (0, express_1.Router)();
const honeycombService = typedi_1.default.get(HoneycombService_1.HoneycombService);
exports.honeycombRoutes.all("*", jwtSign_1.default, ensureAuth_1.default);
exports.honeycombRoutes.post("/", honeycombService.create());
exports.honeycombRoutes.get("/:id/:beehiveId", honeycombService.get());
exports.honeycombRoutes.put("/:id/:beehiveId", honeycombService.update());
exports.honeycombRoutes.delete("/:id/:beehiveId", honeycombService.delete());
