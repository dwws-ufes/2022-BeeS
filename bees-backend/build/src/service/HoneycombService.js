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
exports.HoneycombService = void 0;
const typedi_1 = require("typedi");
const customAppError_1 = __importDefault(require("../customError/customAppError"));
const BeehiveRepository_1 = require("../persistence/repositoies/BeehiveRepository");
const BeeRepository_1 = require("../persistence/repositoies/BeeRepository");
const HoneycombRepository_1 = require("../persistence/repositoies/HoneycombRepository");
let HoneycombService = class HoneycombService {
    create() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.auth;
                if (auth === undefined || auth === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "No token found"
                    });
                }
                const user = yield this.beeRepo.getBeeByEmail(auth.email);
                if (user === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Token invalid"
                    });
                }
                const { beehive, sku, name, description, quantity, expiry } = req.body;
                const beehiveObj = yield this.beehiveRepo.getBeehiveById(beehive, user.email);
                if (beehiveObj === null) {
                    return res.status(401).json({
                        status: "ERROR",
                        message: "Not authorized to create honeycomb in this beehive"
                    });
                }
                yield this.honeycombRepo.createHoneycomb(beehive, sku, name, description, quantity, new Date(expiry));
                return res.send({
                    status: "OK",
                    message: "Honeycomb created"
                });
            }
            catch (e) {
                console.error(e);
                if (e instanceof customAppError_1.default) {
                    return res.status(e.code).send({ status: "ERROR", message: e.message });
                }
                else {
                    return res.status(500).send({ status: "error", message: e.message });
                }
            }
        });
    }
    get() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.auth;
                if (auth === undefined || auth === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "No token found"
                    });
                }
                const user = yield this.beeRepo.getBeeByEmail(auth.email);
                if (user === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Token invalid"
                    });
                }
                const { id, beehiveId } = req.params;
                const beehive = yield this.beehiveRepo.getBeehiveById(Number(beehiveId), user.email);
                if (beehive === null) {
                    return res.status(401).json({
                        status: "ERROR",
                        message: "Unauthorized to get honeycombs from this beehive"
                    });
                }
                const honeycomb = yield this.honeycombRepo.getHoneycombById(id, Number(beehiveId));
                if (honeycomb === null) {
                    return res.status(404).json({
                        status: "ERROR",
                        message: "Honeycomb not found"
                    });
                }
                return res.send({
                    status: "OK",
                    honeycomb
                });
            }
            catch (e) {
                console.error(e);
                if (e instanceof customAppError_1.default) {
                    return res.status(e.code).send({ status: "ERROR", message: e.message });
                }
                else {
                    return res.status(500).send({ status: "error", message: e.message });
                }
            }
        });
    }
    update() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.auth;
                if (auth === undefined || auth === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "No token found"
                    });
                }
                const user = yield this.beeRepo.getBeeByEmail(auth.email);
                if (user === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Token invalid"
                    });
                }
                const { id, beehiveId } = req.params;
                const { sku, name, description, quantity, expiry } = req.body;
                yield this.honeycombRepo.updateHoneycomb(Number(beehiveId), id, sku, name, description, quantity, expiry);
                return res.status(200).send({
                    status: "OK",
                    message: "Honeycomb Updated"
                });
            }
            catch (e) {
                console.error(e);
                if (e instanceof customAppError_1.default) {
                    return res.status(e.code).send({ status: "ERROR", message: e.message });
                }
                else {
                    return res.status(500).send({ status: "error", message: e.message });
                }
            }
        });
    }
    delete() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.auth;
                if (auth === undefined || auth === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "No token found"
                    });
                }
                const user = yield this.beeRepo.getBeeByEmail(auth.email);
                if (user === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Token invalid"
                    });
                }
                const { id, beehiveId } = req.params;
                yield this.honeycombRepo.deleteHoneycomb(Number(beehiveId), id);
                return res.status(200).send({
                    status: "OK",
                    message: `${id} deleted`
                });
            }
            catch (e) {
                console.error(e);
                if (e instanceof customAppError_1.default) {
                    return res.status(e.code).send({ status: "ERROR", message: e.message });
                }
                else {
                    return res.status(500).send({ status: "error", message: e.message });
                }
            }
        });
    }
};
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", HoneycombRepository_1.HoneycombRepository)
], HoneycombService.prototype, "honeycombRepo", void 0);
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", BeeRepository_1.BeeRepository)
], HoneycombService.prototype, "beeRepo", void 0);
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", BeehiveRepository_1.BeehiveRepository)
], HoneycombService.prototype, "beehiveRepo", void 0);
HoneycombService = __decorate([
    (0, typedi_1.Service)()
], HoneycombService);
exports.HoneycombService = HoneycombService;
