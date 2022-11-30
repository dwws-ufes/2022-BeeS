import { Inject, Service } from "typedi";
import { LogRepository } from "../persistence/repositoies/LogRepository";

@Service()
export class LogService{
    @Inject()
    LogRepo!: LogRepository
}