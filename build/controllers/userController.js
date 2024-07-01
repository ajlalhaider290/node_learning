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
exports.getUserTodoById = exports.getUserTodos = exports.deleteUser = exports.partialUpdateUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const userService = __importStar(require("../services/userService"));
const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    const user = userService.getUserById(req.params.id);
    res.json(user);
};
exports.getUserById = getUserById;
const createUser = (req, res) => {
    const newUser = userService.createUser(req.body);
    res.status(201).json(newUser);
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const updatedUser = userService.updateUser(req.params.id, req.body);
    res.json(updatedUser);
};
exports.updateUser = updateUser;
const partialUpdateUser = (req, res) => {
    const updatedUser = userService.partialUpdateUser(req.params.id, req.body);
    res.json(updatedUser);
};
exports.partialUpdateUser = partialUpdateUser;
const deleteUser = (req, res) => {
    userService.deleteUser(req.params.id);
    res.status(204).send();
};
exports.deleteUser = deleteUser;
const getUserTodos = (req, res) => {
    const todos = userService.getUserTodos(req.params.id);
    res.json(todos);
};
exports.getUserTodos = getUserTodos;
const getUserTodoById = (req, res) => {
    const todo = userService.getUserTodoById(req.params.id, req.params.todoId);
    res.json(todo);
};
exports.getUserTodoById = getUserTodoById;
