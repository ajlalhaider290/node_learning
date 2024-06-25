"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getID = exports.getTime = exports.validateUserIdQuery = exports.validateUserBody = void 0;
const customError_1 = require("../utils/customError");
const userService = __importStar(require("../services/userService"));
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
    const user = userService.users.find((u) => u.id === Number(id));
    if (!user) {
        throw new customError_1.CustomError('User not found', 404);
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
