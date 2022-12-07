import { Service } from "typedi"
import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
import { Bee } from "./models/Bee"
import { Beehive } from "./models/Beehive"
import { Honeycomb } from "./models/Honeycomb"
import { Log } from "./models/Log"

dotenv.config()
const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env["POSTGRES_HOST"],
    port: 5432,
    username: process.env["POSTGRES_USER"],
    password: process.env["POSTGRES_PASSWORD"],
    database: process.env["POSTGRES_USER"],
    entities: [Bee, Beehive, Honeycomb, Log],
    logging: "all"
})

@Service()
export class DataSourceClass {
    dataSource: DataSource
    constructor(){
        this.dataSource = AppDataSource
    }
}

export default AppDataSource

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })