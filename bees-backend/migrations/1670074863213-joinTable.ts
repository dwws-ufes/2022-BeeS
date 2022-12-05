import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class joinTable1670074863213 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
        }))

        await queryRunner.createForeignKey("bee_admin_beehive", new TableForeignKey({
            columnNames: ["bee_id"],
            referencedTableName: "bee",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }))

        await queryRunner.createForeignKey("bee_admin_beehive", new TableForeignKey({
            columnNames: ["beehive_id"],
            referencedTableName: "beehive",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }))

        await queryRunner.createPrimaryKey("bee_admin_beehive", ["bee_id", "beehive_id"])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bee_admin_beehive")
    }

}
