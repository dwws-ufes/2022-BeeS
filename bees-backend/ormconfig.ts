import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'

dotenv.config()
export default new DataSource({
    type: "postgres",
    host: process.env["HOST"],
    port: 5432,
    username: process.env["POSTGRES_USER"],
    password: process.env["POSTGRES_PASSWORD"],
    database: process.env["POSTGRES_USER"],
    entities: ["./src/presistence/models/*{.ts, .js}"],
    migrations: ["./migrations/*{.ts, .js}"],
    migrationsTableName: "migration_table"
})