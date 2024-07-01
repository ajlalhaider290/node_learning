import mongoose from 'mongoose';
import Todo from '../models/todos';

export const getAllTodos = async () => {
  return await Todo.find();
};

export const getTodoById = async (todoId: string) => {
  return await Todo.findById(new mongoose.Types.ObjectId(todoId));
};

export const createTodo = async (todoData: any) => {
  const todo = new Todo(todoData);
  return await todo.save();
};

export const updateTodo = async (todoId: string, todoData: any) => {
  return await Todo.findByIdAndUpdate(new mongoose.Types.ObjectId(todoId), todoData, { new: true });
};

export const partialUpdateTodo = async (todoId: string, todoData: any) => {
  return await Todo.findByIdAndUpdate(new mongoose.Types.ObjectId(todoId), todoData, { new: true });
};

export const deleteTodo = async (todoId: string) => {
  return await Todo.findByIdAndDelete(new mongoose.Types.ObjectId(todoId));
};
