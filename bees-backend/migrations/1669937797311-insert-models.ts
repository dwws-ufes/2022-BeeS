import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class insertModels1669937797311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;")
        
        await queryRunner.createTable(
            new Table({
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
            })
        )
        await queryRunner.createTable(new Table({
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
        }))

        await queryRunner.createForeignKey("beehive", new TableForeignKey({
            columnNames: ["owner"],
            referencedColumnNames: ["id"],
            referencedTableName: "bee",
            onDelete: "CASCADE"
        }))

        await queryRunner.createTable(new Table({
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
        }))

        await queryRunner.createForeignKey("honeycomb", new TableForeignKey({
            columnNames: ["beehive"],
            referencedColumnNames: ["id"],
            referencedTableName: "beehive",
            onDelete: "CASCADE"
        }))

        await queryRunner.createTable(new Table({
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
                },{
                    name: "beehive",
                    type: "int",
                    isNullable: false
                }
            ]
        }))

        await queryRunner.createForeignKey("log", new TableForeignKey({
            columnNames: ["bee"],
            referencedColumnNames: ["id"],
            referencedTableName: "bee",
            onDelete: "CASCADE"
        }))
        
        await queryRunner.createForeignKey("log", new TableForeignKey({
            columnNames: ["honeycomb", "beehive"],
            referencedColumnNames: ["sku", "beehive"],
            referencedTableName: "honeycomb",
            onDelete: "CASCADE"
        }))
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("log")
        await queryRunner.dropTable("honeycomb")
        await queryRunner.dropTable("beehive")
        await queryRunner.dropTable("bee")
    }

}
