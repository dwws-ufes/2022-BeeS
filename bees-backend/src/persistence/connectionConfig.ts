import { Service } from "typedi"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env["POSTGRES_USERNAME"],
    password: process.env["POSTGRES_PASSWORD"],
    database: "bees",
})

@Service()
export class DataSourceClass {
    dataSource: DataSource
    constructor(){
        this.dataSource = AppDataSource
    }
}

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })