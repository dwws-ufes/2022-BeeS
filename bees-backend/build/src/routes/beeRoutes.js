"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.beeRoutes = void 0;
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const BeeService_1 = require("../service/BeeService");
exports.beeRoutes = (0, express_1.Router)();
const beeService = typedi_1.default.get(BeeService_1.BeeService);
exports.beeRoutes.post("/register", beeService.register());
exports.beeRoutes.post("/login", beeService.login());
