"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceClass = void 0;
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
const Bee_1 = require("./models/Bee");
const Beehive_1 = require("./models/Beehive");
const Honeycomb_1 = require("./models/Honeycomb");
const Log_1 = require("./models/Log");
dotenv.config();
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env["NODE_ENV"] === "prod" ? process.env["POSTGRES_HOST"] : "localhost",
    port: 5432,
    username: process.env["POSTGRES_USER"],
    password: process.env["POSTGRES_PASSWORD"],
    database: process.env["POSTGRES_USER"],
    entities: [Bee_1.Bee, Beehive_1.Beehive, Honeycomb_1.Honeycomb, Log_1.Log],
    logging: "all"
});
let DataSourceClass = class DataSourceClass {
    constructor() {
        this.dataSource = AppDataSource;
    }
};
DataSourceClass = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], DataSourceClass);
exports.DataSourceClass = DataSourceClass;
exports.default = AppDataSource;
AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
