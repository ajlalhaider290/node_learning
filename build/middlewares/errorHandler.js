"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const customError_1 = require("../utils/customError");
// This is a centralized error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof customError_1.CustomError) {
        return res.status(err.statusCode).json({
            message: err.message,
            details: err.details,
        });
    }
    res.status(500).json({
        message: 'Internal Server Error',
    });
};
exports.errorHandler = errorHandler;
