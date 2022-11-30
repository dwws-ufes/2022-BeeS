import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { DataSourceClass } from "../connectionConfig";
import { Log } from "../models/Log";

@Service()
export class LogRepository {
    repo: Repository<Log>

    @Inject()
    dataSource!: DataSourceClass

    constructor(){
        this.repo = this.dataSource.dataSource.getRepository(Log)
    }
}