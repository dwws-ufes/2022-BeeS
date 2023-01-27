"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinTable1670074863213 = void 0;
const typeorm_1 = require("typeorm");
class joinTable1670074863213 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "bee_admin_beehive",
                columns: [
                    {
                        name: "bee_id",
                        type: "int"
                    },
                    {
                        name: "beehive_id",
                        type: "int"
                    }
                ]
            }));
            yield queryRunner.createForeignKey("bee_admin_beehive", new typeorm_1.TableForeignKey({
                columnNames: ["bee_id"],
                referencedTableName: "bee",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE"
            }));
            yield queryRunner.createForeignKey("bee_admin_beehive", new typeorm_1.TableForeignKey({
                columnNames: ["beehive_id"],
                referencedTableName: "beehive",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE"
            }));
            yield queryRunner.createPrimaryKey("bee_admin_beehive", ["bee_id", "beehive_id"]);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("bee_admin_beehive");
        });
    }
}
exports.joinTable1670074863213 = joinTable1670074863213;
