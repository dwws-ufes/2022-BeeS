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
exports.Log = exports.EditType = void 0;
const typeorm_1 = require("typeorm");
const Bee_1 = require("./Bee");
const Honeycomb_1 = require("./Honeycomb");
var EditType;
(function (EditType) {
    EditType[EditType["ADDED"] = 0] = "ADDED";
    EditType[EditType["DESC_EDITED"] = 1] = "DESC_EDITED";
    EditType[EditType["QTD_EDITED"] = 2] = "QTD_EDITED";
})(EditType = exports.EditType || (exports.EditType = {}));
let Log = class Log {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Log.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Log.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Bee_1.Bee, (bee) => bee.logs),
    (0, typeorm_1.JoinColumn)({ name: "bee" }),
    __metadata("design:type", Bee_1.Bee)
], Log.prototype, "bee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Honeycomb_1.Honeycomb, (honeycomb) => honeycomb.logs),
    (0, typeorm_1.JoinColumn)([
        {
            name: "honeycomb"
        }, {
            name: "beehive"
        }
    ]),
    __metadata("design:type", Honeycomb_1.Honeycomb)
], Log.prototype, "honeycomb", void 0);
Log = __decorate([
    (0, typeorm_1.Entity)({ name: "log" })
], Log);
exports.Log = Log;
