import { NextFunction, Response } from "express";
import { Request } from "express-jwt";

export default (req: Request, res: Response, next: NextFunction) => {
    const auth = req.auth
    if(auth === undefined || auth === null){
        return res.status(401).send({
            status: "ERROR",
            message: "No token found"
        })
    }
    return next('route')
}