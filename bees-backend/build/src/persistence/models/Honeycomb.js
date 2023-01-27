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
exports.Honeycomb = void 0;
const typeorm_1 = require("typeorm");
const Beehive_1 = require("./Beehive");
const Log_1 = require("./Log");
let Honeycomb = class Honeycomb {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Honeycomb.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Honeycomb.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Honeycomb.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Honeycomb.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Honeycomb.prototype, "expiry", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Honeycomb.prototype, "dateIn", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Honeycomb.prototype, "dateOut", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Beehive_1.Beehive, (beehive) => beehive.items),
    (0, typeorm_1.JoinColumn)({ name: "beehive" }),
    __metadata("design:type", Beehive_1.Beehive)
], Honeycomb.prototype, "beehive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Log_1.Log, (log) => log.honeycomb),
    __metadata("design:type", Array)
], Honeycomb.prototype, "logs", void 0);
Honeycomb = __decorate([
    (0, typeorm_1.Entity)({ name: "honeycomb" })
], Honeycomb);
exports.Honeycomb = Honeycomb;
