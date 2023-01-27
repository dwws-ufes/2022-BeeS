"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoneycombRepository = void 0;
const typedi_1 = require("typedi");
const customAppError_1 = __importDefault(require("../../customError/customAppError"));
const connectionConfig_1 = require("../connectionConfig");
const Beehive_1 = require("../models/Beehive");
const Honeycomb_1 = require("../models/Honeycomb");
let HoneycombRepository = class HoneycombRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repo = dataSource.dataSource.getRepository(Honeycomb_1.Honeycomb);
        this.beehiveRepo = dataSource.dataSource.getRepository(Beehive_1.Beehive);
    }
    createHoneycomb(beehiveId, sku, name, description, quantity, expiry) {
        return __awaiter(this, void 0, void 0, function* () {
            const beehive = yield this.beehiveRepo.findOneBy({ id: beehiveId });
            if (beehive === null) {
                throw new customAppError_1.default("Beehive not found", 404);
            }
            console.log(beehive.id, beehiveId);
            return yield this.repo.insert({
                sku,
                name,
                description,
                quantity,
                expiry,
                dateIn: new Date(),
                beehive
            });
        });
    }
    getHoneycombById(sku, beehiveId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.findOneBy({ sku, beehive: { id: beehiveId } });
        });
    }
    getHoneycombsOfBeehive(beehiveId, pageNo, pageSize, name) {
        return __awaiter(this, void 0, void 0, function* () {
            name = name === undefined || name === "undefined" ? "" : name;
            name = `%${name}%`;
            return yield this.repo.createQueryBuilder("honeycomb")
                .select()
                .innerJoin("honeycomb.beehive", "beehive")
                .take(pageSize)
                .skip(pageNo)
                .where("beehive.id = :id", { id: beehiveId })
                .andWhere("honeycomb.name LIKE :name", { name })
                .getMany();
        });
    }
    deleteHoneycomb(beehiveId, sku) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.delete({ beehive: { id: beehiveId }, sku });
        });
    }
    updateHoneycomb(beehiveId, sku, newSku, name, description, quantity, expiry) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.update({ beehive: { id: beehiveId }, sku }, {
                sku: newSku,
                name,
                description,
                expiry,
                quantity
            });
        });
    }
};
HoneycombRepository = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [connectionConfig_1.DataSourceClass])
], HoneycombRepository);
exports.HoneycombRepository = HoneycombRepository;
