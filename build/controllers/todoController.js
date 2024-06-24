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
exports.deleteTodo = exports.partialUpdateTodo = exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodos = void 0;
const todoService = __importStar(require("../services/todoService"));
const getAllTodos = (req, res) => {
    const todos = todoService.getAllTodos();
    res.json(todos);
};
exports.getAllTodos = getAllTodos;
const getTodoById = (req, res) => {
    const todo = todoService.getTodoById(req.params.id);
    res.json(todo);
};
exports.getTodoById = getTodoById;
const createTodo = (req, res) => {
    const newTodo = todoService.createTodo(req.body);
    res.status(201).json(newTodo);
};
exports.createTodo = createTodo;
const updateTodo = (req, res) => {
    const updatedTodo = todoService.updateTodo(req.params.id, req.body);
    res.json(updatedTodo);
};
exports.updateTodo = updateTodo;
const partialUpdateTodo = (req, res) => {
    const updatedTodo = todoService.partialUpdateTodo(req.params.id, req.body);
    res.json(updatedTodo);
};
exports.partialUpdateTodo = partialUpdateTodo;
const deleteTodo = (req, res) => {
    todoService.deleteTodo(req.params.id);
    res.status(204).send();
};
exports.deleteTodo = deleteTodo;
