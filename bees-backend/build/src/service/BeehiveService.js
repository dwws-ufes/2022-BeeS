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
exports.BeehiveService = void 0;
const typedi_1 = require("typedi");
const customAppError_1 = __importDefault(require("../customError/customAppError"));
const BeehiveRepository_1 = require("../persistence/repositoies/BeehiveRepository");
const BeeRepository_1 = require("../persistence/repositoies/BeeRepository");
const HoneycombRepository_1 = require("../persistence/repositoies/HoneycombRepository");
let BeehiveService = class BeehiveService {
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
                const { name, admins } = req.body;
                yield this.beehiveRepo.createBeehive(name, user.email, admins);
                return res.send({
                    status: "OK",
                    message: "Beehive created"
                });
            }
            catch (e) {
                console.log(e);
                if (e instanceof customAppError_1.default) {
                    return res.status(e.code).send({ status: "ERROR", message: e.message });
                }
                else {
                    return res.status(500).send({ status: "error", message: e.message });
                }
            }
        });
    }
    getBeehives() {
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
                const { pageNo, pageSize, name } = req.query;
                const beehives = yield this.beehiveRepo.getBeehivesOfUser(user.email, Number(pageNo), Number(pageSize), String(name));
                return res.send({
                    status: "OK",
                    beehives
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
    getBeehive() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.auth;
                const user = yield this.beeRepo.getBeeByEmail(auth.email);
                if (user === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Token invalid"
                    });
                }
                const { id } = req.params;
                const response = yield this.beehiveRepo.getBeehiveById(Number(id), user.email);
                return res.send({
                    status: "OK",
                    beehive: response
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
                const { id } = req.params;
                const beehive = this.beehiveRepo.getBeehiveById(Number(id), user.email);
                if (beehive === null) {
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Unauthorized to update this beehive"
                    });
                }
                const { name, admins } = req.body;
                yield this.beehiveRepo.updateBeehive(Number(id), name, admins);
                return res.send({
                    status: "OK",
                    message: "Beehive updated"
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
    getHoneycombsOfBeehive() {
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
                const { id } = req.params;
                const beehive = yield this.beehiveRepo.getBeehiveById(Number(id), user.email);
                if (beehive === null) {
                    return res.status(401).json({
                        status: "ERROR",
                        message: "Unauthorized to get honeycombs from this beehive"
                    });
                }
                const { name, pageNo, pageSize } = req.query;
                const honeycombs = yield this.honeycombRepo.getHoneycombsOfBeehive(Number(id), Number(pageNo), Number(pageSize), String(name));
                return res.send({
                    status: "OK",
                    honeycombs
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
                const { id } = req.params;
                const beehive = yield this.beehiveRepo.getBeehiveById(Number(id), user.email);
                if (beehive === null) {
                    return res.status(401).json({
                        status: "ERROR",
                        message: "Unauthorized to get honeycombs from this beehive"
                    });
                }
                yield this.beehiveRepo.deleteBeehive(Number(id));
                return res.status(200).send({
                    status: "OK",
                    message: "Beehive deleted"
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
    __metadata("design:type", BeehiveRepository_1.BeehiveRepository)
], BeehiveService.prototype, "beehiveRepo", void 0);
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", HoneycombRepository_1.HoneycombRepository)
], BeehiveService.prototype, "honeycombRepo", void 0);
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", BeeRepository_1.BeeRepository)
], BeehiveService.prototype, "beeRepo", void 0);
BeehiveService = __decorate([
    (0, typedi_1.Service)()
], BeehiveService);
exports.BeehiveService = BeehiveService;
