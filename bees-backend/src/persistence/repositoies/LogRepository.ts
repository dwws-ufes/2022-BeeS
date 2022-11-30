import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { DataSourceClass } from "../connectionConfig";
import { Log } from "../models/Log";

@Service()
export class LogRepository {
    repo: Repository<Log>

    constructor(public dataSource: DataSourceClass){
        this.repo = dataSource.dataSource.getRepository(Log)
    }
}