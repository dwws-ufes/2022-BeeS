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
exports.Beehive = void 0;
const typeorm_1 = require("typeorm");
const Bee_1 = require("./Bee");
const Honeycomb_1 = require("./Honeycomb");
let Beehive = class Beehive {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Beehive.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Beehive.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Bee_1.Bee, (bee) => bee.beehivesOwned),
    (0, typeorm_1.JoinColumn)({ name: "owner" }),
    __metadata("design:type", Bee_1.Bee)
], Beehive.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Bee_1.Bee, (bee) => bee.beehivesAdmin),
    __metadata("design:type", Array)
], Beehive.prototype, "admins", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Honeycomb_1.Honeycomb, (honeycomb) => honeycomb.beehive),
    __metadata("design:type", Array)
], Beehive.prototype, "items", void 0);
Beehive = __decorate([
    (0, typeorm_1.Entity)({ name: "beehive" })
], Beehive);
exports.Beehive = Beehive;
