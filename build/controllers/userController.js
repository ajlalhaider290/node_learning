"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTodoById = exports.getUserTodos = exports.deleteUser = exports.partialUpdateUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("../models/users"));
const todos_1 = __importDefault(require("../models/todos"));
// Get all users
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.default.find();
        res.status(200).json(users);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
// Get a user by ID
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const user = yield users_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.getUserById = getUserById;
// Create a new user
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new users_1.default(req.body);
        const savedUser = yield user.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        next(err);
    }
});
exports.createUser = createUser;
// Update a user by ID
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const user = yield users_1.default.findByIdAndUpdate(userId, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.updateUser = updateUser;
// Partially update a user by ID
const partialUpdateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const user = yield users_1.default.findByIdAndUpdate(userId, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.partialUpdateUser = partialUpdateUser;
// Delete a user by ID
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const user = yield users_1.default.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUser = deleteUser;
// Get all todos for a user
const getUserTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const todos = yield todos_1.default.find({ userId });
        res.status(200).json(todos);
    }
    catch (err) {
        next(err);
    }
});
exports.getUserTodos = getUserTodos;
// Get a specific todo for a user
const getUserTodoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const todoId = new mongoose_1.default.Types.ObjectId(req.params.todoId);
        const todo = yield todos_1.default.findOne({ _id: todoId, userId });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (err) {
        next(err);
    }
});
exports.getUserTodoById = getUserTodoById;
