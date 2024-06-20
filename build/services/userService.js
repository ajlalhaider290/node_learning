"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTodoById = exports.getUserTodos = exports.deleteUser = exports.partialUpdateUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: '123456', isDisabled: false, createdDate: new Date(), updatedDate: new Date() },
];
const getAllUsers = () => {
    return users;
};
exports.getAllUsers = getAllUsers;
const getUserById = (id) => {
    return users.find(user => user.id === parseInt(id));
};
exports.getUserById = getUserById;
const createUser = (user) => {
    const newUser = Object.assign(Object.assign({}, user), { id: users.length + 1, createdDate: new Date(), updatedDate: new Date() });
    users.push(newUser);
    return newUser;
};
exports.createUser = createUser;
const updateUser = (id, updatedData) => {
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        Object.assign(user, updatedData, { updatedDate: new Date() });
        return user;
    }
    return undefined;
};
exports.updateUser = updateUser;
const partialUpdateUser = (id, updatedData) => {
    return (0, exports.updateUser)(id, updatedData);
};
exports.partialUpdateUser = partialUpdateUser;
const deleteUser = (id) => {
    users = users.filter(user => user.id !== parseInt(id));
};
exports.deleteUser = deleteUser;
const getUserTodos = (userId) => {
    return [
        { id: 1, title: 'Todo 1', userId: parseInt(userId), isCompleted: false, createdDate: new Date(), updatedDate: new Date() },
    ];
};
exports.getUserTodos = getUserTodos;
const getUserTodoById = (userId, todoId) => {
    return { id: parseInt(todoId), title: 'Todo 1', userId: parseInt(userId), isCompleted: false, createdDate: new Date(), updatedDate: new Date() };
};
exports.getUserTodoById = getUserTodoById;
