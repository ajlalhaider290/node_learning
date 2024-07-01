"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, statusCode, details) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        // Set the prototype
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
