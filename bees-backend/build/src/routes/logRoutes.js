"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRoutes = void 0;
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const ensureAuth_1 = __importDefault(require("../customMiddleware/ensureAuth"));
const jwtSign_1 = __importDefault(require("../customMiddleware/jwtSign"));
const LogService_1 = require("../service/LogService");
exports.logRoutes = (0, express_1.Router)();
const beeService = typedi_1.default.get(LogService_1.LogService);
exports.logRoutes.all("*", jwtSign_1.default, ensureAuth_1.default);
