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
exports.deleteTodoController = exports.partialUpdateTodoController = exports.updateTodoController = exports.createTodoController = exports.getTodoByIdController = exports.getAllTodosController = void 0;
const todoServices = __importStar(require("../services/todoServices"));
// Get all todos
const getAllTodosController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todoServices.getAllTodos();
        res.status(200).json(todos);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllTodosController = getAllTodosController;
// Get a todo by ID
const getTodoByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todoServices.getTodoById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (err) {
        next(err);
    }
});
exports.getTodoByIdController = getTodoByIdController;
// Create a new todo
const createTodoController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todoServices.createTodo(req.body);
        res.status(201).json(todo);
    }
    catch (err) {
        next(err);
    }
});
exports.createTodoController = createTodoController;
// Update a todo by ID
const updateTodoController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todoServices.updateTodo(req.params.id, req.body);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (err) {
        next(err);
    }
});
exports.updateTodoController = updateTodoController;
// Partially update a todo by ID
const partialUpdateTodoController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todoServices.partialUpdateTodo(req.params.id, req.body);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (err) {
        next(err);
    }
});
exports.partialUpdateTodoController = partialUpdateTodoController;
// Delete a todo by ID
const deleteTodoController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todoServices.deleteTodo(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted' });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteTodoController = deleteTodoController;
