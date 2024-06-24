"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getID = exports.getTime = exports.validateUserIdQuery = exports.validateUserBody = void 0;
const customError_1 = require("../utils/customError");
const validateUserBody = (req, res, next) => {
    const { name, email, password, isDisabled } = req.body;
    if (!name || typeof name !== 'string') {
        throw new customError_1.CustomError('Invalid or missing name', 400);
    }
    if (!email || typeof email !== 'string') {
        throw new customError_1.CustomError('Invalid or missing Email', 400);
    }
    if (!password || typeof password !== 'string') {
        throw new customError_1.CustomError('Invalid or missing password', 400);
    }
    if (typeof isDisabled !== 'boolean') {
        throw new customError_1.CustomError('Invalid or missing isDisabled flag', 400);
    }
    next();
};
exports.validateUserBody = validateUserBody;
const validateUserIdQuery = (req, res, next) => {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
        throw new customError_1.CustomError('Invalid or missing user ID', 400);
    }
    next();
};
exports.validateUserIdQuery = validateUserIdQuery;
const getTime = (req, res, next) => {
    console.log('Time:', Date.now());
    next();
};
exports.getTime = getTime;
const getID = (req, res, next) => {
    console.log('ID:', req.params.id);
    next();
};
exports.getID = getID;
