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
exports.deleteTodo = exports.partialUpdateTodo = exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodos = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const todos_1 = __importDefault(require("../models/todos"));
// Get all todos
const getAllTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todos_1.default.find();
        res.status(200).json(todos);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllTodos = getAllTodos;
// Get a todo by ID
const getTodoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const todo = yield todos_1.default.findById(todoId);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (err) {
        next(err);
    }
});
exports.getTodoById = getTodoById;
// Create a new todo
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = new todos_1.default(req.body);
        const savedTodo = yield todo.save();
        res.status(201).json(savedTodo);
    }
    catch (err) {
        next(err);
    }
});
exports.createTodo = createTodo;
// Update a todo by ID
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const todo = yield todos_1.default.findByIdAndUpdate(todoId, req.body, { new: true });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (err) {
        next(err);
    }
});
exports.updateTodo = updateTodo;
// Partially update a todo by ID
const partialUpdateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const todo = yield todos_1.default.findByIdAndUpdate(todoId, req.body, { new: true });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (err) {
        next(err);
    }
});
exports.partialUpdateTodo = partialUpdateTodo;
// Delete a todo by ID
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const todo = yield todos_1.default.findByIdAndDelete(todoId);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted' });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteTodo = deleteTodo;
