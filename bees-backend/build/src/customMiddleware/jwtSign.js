"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
exports.default = (0, express_jwt_1.expressjwt)({ secret: process.env["JWT_SECRET"] || "Ise6Ztsr4zcYNC8HmFKU3FSU8GVvJtsxA92uSpEeYHQ7Ub", algorithms: ["HS256"] });
