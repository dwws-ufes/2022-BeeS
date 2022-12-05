export default class AppError extends Error {
    code
    constructor(msg: string, code: number){
        super(msg)
        this.code = code
    }
}