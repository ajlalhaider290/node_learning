"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
// Connect to MongoDB
(0, database_1.default)();
app.use(express_1.default.json());
// routes
app.use('/api/users', userRoutes_1.default);
app.use('/api/todos', todoRoutes_1.default);
// error handling middleware
app.use(errorHandler_1.errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
