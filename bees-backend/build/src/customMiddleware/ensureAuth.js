"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    const auth = req.auth;
    if (auth === undefined || auth === null) {
        return res.status(401).send({
            status: "ERROR",
            message: "No token found"
        });
    }
    return next('route');
};
