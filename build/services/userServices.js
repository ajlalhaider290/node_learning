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
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_1.default.find();
});
exports.getAllUsers = getAllUsers;
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_1.default.findById(new mongoose_1.default.Types.ObjectId(userId));
});
exports.getUserById = getUserById;
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new users_1.default(userData);
    return yield user.save();
});
exports.createUser = createUser;
const updateUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_1.default.findByIdAndUpdate(new mongoose_1.default.Types.ObjectId(userId), userData, { new: true });
});
exports.updateUser = updateUser;
const partialUpdateUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_1.default.findByIdAndUpdate(new mongoose_1.default.Types.ObjectId(userId), userData, { new: true });
});
exports.partialUpdateUser = partialUpdateUser;
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_1.default.findByIdAndDelete(new mongoose_1.default.Types.ObjectId(userId));
});
exports.deleteUser = deleteUser;
const getUserTodos = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todos_1.default.find({ userId: new mongoose_1.default.Types.ObjectId(userId) });
});
exports.getUserTodos = getUserTodos;
const getUserTodoById = (userId, todoId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todos_1.default.findOne({ _id: new mongoose_1.default.Types.ObjectId(todoId), userId: new mongoose_1.default.Types.ObjectId(userId) });
});
exports.getUserTodoById = getUserTodoById;
