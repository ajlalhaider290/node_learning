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
const express_1 = require("express");
const todoController = __importStar(require("../controllers/todoController"));
const middleware = __importStar(require("../middlewares/validationMiddleware"));
const router = (0, express_1.Router)();
// This is an application level middleware and will run for all routes
router.use(middleware.getTime);
router.get('/', todoController.getAllTodos);
// These are router-level middleware and will run only for this specific route
router.get('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.getTodoById);
router.post('/', todoController.createTodo);
router.put('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.updateTodo);
router.patch('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.partialUpdateTodo);
router.delete('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.deleteTodo);
exports.default = router;
