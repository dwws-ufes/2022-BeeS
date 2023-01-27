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
exports.BeehiveRepository = void 0;
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const customAppError_1 = __importDefault(require("../../customError/customAppError"));
const connectionConfig_1 = require("../connectionConfig");
const Bee_1 = require("../models/Bee");
const Beehive_1 = require("../models/Beehive");
let BeehiveRepository = class BeehiveRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repo = dataSource.dataSource.getRepository(Beehive_1.Beehive);
        this.beeRepo = dataSource.dataSource.getRepository(Bee_1.Bee);
    }
    getBeehivesOfUser(email, pageNo, pageSize, name) {
        return __awaiter(this, void 0, void 0, function* () {
            name = name !== undefined && name !== "undefined" ? name : "";
            return yield this.repo.createQueryBuilder("beehive")
                .select(["beehive.id", "beehive.name",
                "admins.id", "admins.name", "admins.email",
                "owner.id", "owner.name", "owner.email"])
                .leftJoin("beehive.admins", "admins")
                .innerJoin("beehive.owner", "owner")
                .where("beehive.name LIKE :name", { name: `%${name}%` })
                .andWhere(new typeorm_1.Brackets((qb) => qb.where("owner.email = :email", { email }).orWhere("admins.email = :email", { email })))
                .skip(pageNo)
                .take(pageSize)
                .orderBy("beehive.name", "ASC")
                .getMany();
        });
    }
    createBeehive(name, ownerEmail, adminsEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = yield this.beeRepo.findOneBy({ email: ownerEmail });
            const admins = yield this.beeRepo.findBy({ email: (0, typeorm_1.In)(adminsEmail || []) });
            if (owner === null) {
                throw new customAppError_1.default("This user does not exist", 404);
            }
            console.log(admins, adminsEmail);
            if (admins.length === 0 && adminsEmail !== undefined && adminsEmail.length !== 0) {
                throw new customAppError_1.default("Some admins do not have a account", 404);
            }
            const beehiveInsert = yield this.repo.insert({
                name,
                owner
            });
            const insertRows = admins.map((bee) => ({
                bee_id: bee.id,
                beehive_id: beehiveInsert.identifiers[0].id
            }));
            const relationInsert = yield this.dataSource.dataSource.createQueryBuilder()
                .insert()
                .into("bee_admin_beehive")
                .values(insertRows)
                .execute();
            return [beehiveInsert, relationInsert];
        });
    }
    updateBeehive(id, name, adminsEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            let results = {
                delete: undefined,
                insertAdmins: undefined,
                update: undefined
            };
            if (adminsEmail) {
                const admins = yield this.beeRepo.findBy({ email: (0, typeorm_1.In)(adminsEmail || []) });
                if (admins.length !== adminsEmail.length) {
                    throw new customAppError_1.default("Some or all admins are not registered", 404);
                }
                const deleteRes = yield this.dataSource.dataSource.createQueryBuilder()
                    .from("bee_admin_beehive", "admins")
                    .delete()
                    .where("bee_admin_beehive.beehive_id = :id", { id })
                    .execute();
                const insertRows = admins.map((bee) => ({
                    bee_id: bee.id,
                    beehive_id: id
                }));
                const adminsInsertRes = yield this.dataSource.dataSource.createQueryBuilder()
                    .insert()
                    .into("bee_admin_beehive")
                    .values(insertRows)
                    .execute();
                results.delete = deleteRes;
                results.insertAdmins = adminsInsertRes;
            }
            if (name) {
                const updateRes = yield this.repo.update(id, {
                    name
                });
                results.update = updateRes;
            }
            return results;
        });
    }
    getBeehiveById(id, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.createQueryBuilder("beehive")
                .leftJoin("beehive.admins", "admins")
                .innerJoin("beehive.owner", "owner")
                .select(["beehive.id", "beehive.name", "owner.id", "owner.name", "owner.email", "admins.id", "admins.name", "admins.email"])
                .where("beehive.id = :id", { id })
                .andWhere(new typeorm_1.Brackets((qb) => qb.where("owner.email = :email", { email }).orWhere("admins.email = :email", { email })))
                .getOne();
        });
    }
    deleteBeehive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.delete({ id });
        });
    }
};
BeehiveRepository = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [connectionConfig_1.DataSourceClass])
], BeehiveRepository);
exports.BeehiveRepository = BeehiveRepository;
