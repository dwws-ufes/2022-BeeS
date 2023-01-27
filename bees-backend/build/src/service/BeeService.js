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
exports.BeeService = void 0;
const typedi_1 = require("typedi");
const customAppError_1 = __importDefault(require("../customError/customAppError"));
const BeeRepository_1 = require("../persistence/repositoies/BeeRepository");
const jwt = require('jsonwebtoken');
let BeeService = class BeeService {
    register() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("Registering bee");
            const { name, email, password } = req.body;
            try {
                yield this.beeRepo.createBee(name, email, password);
                console.log("Bee created");
                return res.send({
                    status: "OK",
                    message: "User created"
                });
            }
            catch (e) {
                if (e.message.includes("duplicate")) {
                    e = new customAppError_1.default("Email already exists", 400);
                }
                if (e instanceof customAppError_1.default) {
                    return res.status(e.code).send({ status: "ERROR", message: e.message });
                }
                else {
                    return res.status(500).send({ status: "error", message: e.message });
                }
            }
        });
    }
    login() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            console.log("Login in bee");
            try {
                const user = yield this.beeRepo.getBeeLogin(email, password);
                if (user === null) {
                    console.log("Bee not found");
                    return res.status(401).send({
                        status: "ERROR",
                        message: "Authentication failed"
                    });
                }
                console.log("Bee logged in");
                return res.send({
                    status: "OK",
                    jwt: jwt.sign({
                        email,
                        id: user.id
                    }, process.env['JWT_SECRET'])
                });
            }
            catch (e) {
                console.error(e);
                res.status(500).send(e);
            }
        });
    }
};
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", BeeRepository_1.BeeRepository)
], BeeService.prototype, "beeRepo", void 0);
BeeService = __decorate([
    (0, typedi_1.Service)()
], BeeService);
exports.BeeService = BeeService;
