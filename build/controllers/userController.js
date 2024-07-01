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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTodoByIdController = exports.getUserTodosController = exports.deleteUserController = exports.partialUpdateUserController = exports.updateUserController = exports.createUserController = exports.getUserByIdController = exports.getAllUsersController = void 0;
const userServices = __importStar(require("../services/userServices"));
// Get all users
const getAllUsersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userServices.getAllUsers();
        res.status(200).json(users);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsersController = getAllUsersController;
// Get a user by ID
const getUserByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userServices.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.getUserByIdController = getUserByIdController;
// Create a new user
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userServices.createUser(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.createUserController = createUserController;
// Update a user by ID
const updateUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userServices.updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.updateUserController = updateUserController;
// Partially update a user by ID
const partialUpdateUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userServices.partialUpdateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.partialUpdateUserController = partialUpdateUserController;
// Delete a user by ID
const deleteUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userServices.deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUserController = deleteUserController;
// Get all todos for a user
const getUserTodosController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield userServices.getUserTodos(req.params.id);
        res.status(200).json(todos);
    }
    catch (err) {
        next(err);
    }
});
exports.getUserTodosController = getUserTodosController;
// Get a specific todo for a user
const getUserTodoByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield userServices.getUserTodoById(req.params.id, req.params.todoId);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (err) {
        next(err);
    }
});
exports.getUserTodoByIdController = getUserTodoByIdController;
