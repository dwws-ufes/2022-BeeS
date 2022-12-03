import { expressjwt } from "express-jwt";

export default expressjwt({ secret: process.env["JWT_SECRET"] || "Ise6Ztsr4zcYNC8HmFKU3FSU8GVvJtsxA92uSpEeYHQ7Ub", algorithms: ["HS256"] })
