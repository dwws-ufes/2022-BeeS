"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(msg, code) {
        super(msg);
        this.code = code;
    }
}
exports.default = AppError;
