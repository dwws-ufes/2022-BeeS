import { Inject, Service } from "typedi";
import { LogRepository } from "../persistence/repositoies/LogRepository";

@Service()
class LogService{
    @Inject()
    LogRepo!: LogRepository
}