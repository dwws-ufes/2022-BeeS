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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bee = void 0;
const typeorm_1 = require("typeorm");
const Beehive_1 = require("./Beehive");
const Log_1 = require("./Log");
let Bee = class Bee {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Bee.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bee.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Beehive_1.Beehive, (beehive) => beehive.owner),
    __metadata("design:type", Array)
], Bee.prototype, "beehivesOwned", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Log_1.Log, (log) => log.bee),
    __metadata("design:type", Array)
], Bee.prototype, "logs", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Beehive_1.Beehive, (bee) => bee.admins),
    (0, typeorm_1.JoinTable)({
        name: "bee_admin_beehive",
        joinColumn: {
            name: "bee_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "beehive_id",
            referencedColumnName: "id"
        }
    }),
    __metadata("design:type", Array)
], Bee.prototype, "beehivesAdmin", void 0);
Bee = __decorate([
    (0, typeorm_1.Entity)({ name: "bee" })
], Bee);
exports.Bee = Bee;
