import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config()
export default new DataSource({
    type: "postgres",
    host: process.env["NODE_ENV"] === "prod" ? process.env["POSTGRES_HOST"] : "localhost",
    port: 5432,
    username: process.env["POSTGRES_USER"],
    password: process.env["POSTGRES_PASSWORD"],
    database: process.env["POSTGRES_USER"],
    entities: [path.join(__dirname, "/src", "/presistence", "/models", "/*{.ts, .js}")],
    migrations: [path.join(__dirname, "/migrations", "/*{.ts, .js}")],
    migrationsTableName: "migration_table"
})