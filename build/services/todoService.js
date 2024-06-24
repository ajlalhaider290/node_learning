"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.partialUpdateTodo = exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodos = void 0;
let todos = [
    { id: 1, title: 'Todo 1', userId: 1, isCompleted: false, createdDate: new Date(), updatedDate: new Date() },
];
const getAllTodos = () => {
    return todos;
};
exports.getAllTodos = getAllTodos;
const getTodoById = (id) => {
    return todos.find(todo => todo.id === parseInt(id));
};
exports.getTodoById = getTodoById;
const createTodo = (todo) => {
    const newTodo = Object.assign(Object.assign({}, todo), { id: todos.length + 1, createdDate: new Date(), updatedDate: new Date() });
    todos.push(newTodo);
    return newTodo;
};
exports.createTodo = createTodo;
const updateTodo = (id, updatedData) => {
    const todo = todos.find(todo => todo.id === parseInt(id));
    if (todo) {
        Object.assign(todo, updatedData, { updatedDate: new Date() });
        return todo;
    }
    return undefined;
};
exports.updateTodo = updateTodo;
const partialUpdateTodo = (id, updatedData) => {
    return (0, exports.updateTodo)(id, updatedData);
};
exports.partialUpdateTodo = partialUpdateTodo;
const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== parseInt(id));
};
exports.deleteTodo = deleteTodo;
