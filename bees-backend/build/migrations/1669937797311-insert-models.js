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
exports.insertModels1669937797311 = void 0;
const typeorm_1 = require("typeorm");
class insertModels1669937797311 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "bee",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        type: "int",
                        isGenerated: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    }
                ]
            }));
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "beehive",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        type: "int",
                        isGenerated: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "owner",
                        type: "int",
                        isNullable: false
                    }
                ]
            }));
            yield queryRunner.createForeignKey("beehive", new typeorm_1.TableForeignKey({
                columnNames: ["owner"],
                referencedColumnNames: ["id"],
                referencedTableName: "bee",
                onDelete: "CASCADE"
            }));
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "honeycomb",
                columns: [
                    {
                        name: "sku",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "quantity",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "expiry",
                        type: 'timestamp without time zone',
                        isNullable: false
                    },
                    {
                        name: "dateIn",
                        type: 'timestamp without time zone',
                        isNullable: false,
                        default: "NOW()"
                    },
                    {
                        name: "dateOut",
                        type: 'timestamp without time zone',
                        isNullable: true
                    },
                    {
                        name: "beehive",
                        type: "int",
                        isNullable: false,
                        isPrimary: true
                    }
                ]
            }));
            yield queryRunner.createForeignKey("honeycomb", new typeorm_1.TableForeignKey({
                columnNames: ["beehive"],
                referencedColumnNames: ["id"],
                referencedTableName: "beehive",
                onDelete: "CASCADE"
            }));
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "log",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        isGenerated: true,
                        type: "int"
                    },
                    {
                        name: "type",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "bee",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "honeycomb",
                        type: "varchar",
                        isNullable: false
                    }, {
                        name: "beehive",
                        type: "int",
                        isNullable: false
                    }
                ]
            }));
            yield queryRunner.createForeignKey("log", new typeorm_1.TableForeignKey({
                columnNames: ["bee"],
                referencedColumnNames: ["id"],
                referencedTableName: "bee",
                onDelete: "CASCADE"
            }));
            yield queryRunner.createForeignKey("log", new typeorm_1.TableForeignKey({
                columnNames: ["honeycomb", "beehive"],
                referencedColumnNames: ["sku", "beehive"],
                referencedTableName: "honeycomb",
                onDelete: "CASCADE"
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("log");
            yield queryRunner.dropTable("honeycomb");
            yield queryRunner.dropTable("beehive");
            yield queryRunner.dropTable("bee");
        });
    }
}
exports.insertModels1669937797311 = insertModels1669937797311;
