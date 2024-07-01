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
const getAllTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield todos_1.default.find();
});
exports.getAllTodos = getAllTodos;
const getTodoById = (todoId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todos_1.default.findById(new mongoose_1.default.Types.ObjectId(todoId));
});
exports.getTodoById = getTodoById;
const createTodo = (todoData) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = new todos_1.default(todoData);
    return yield todo.save();
});
exports.createTodo = createTodo;
const updateTodo = (todoId, todoData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todos_1.default.findByIdAndUpdate(new mongoose_1.default.Types.ObjectId(todoId), todoData, { new: true });
});
exports.updateTodo = updateTodo;
const partialUpdateTodo = (todoId, todoData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todos_1.default.findByIdAndUpdate(new mongoose_1.default.Types.ObjectId(todoId), todoData, { new: true });
});
exports.partialUpdateTodo = partialUpdateTodo;
const deleteTodo = (todoId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todos_1.default.findByIdAndDelete(new mongoose_1.default.Types.ObjectId(todoId));
});
exports.deleteTodo = deleteTodo;
