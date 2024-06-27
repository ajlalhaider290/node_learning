import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Todo from '../models/todos';

// Get all todos
export const getAllTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    next(err);
  }
};

// Get a todo by ID
export const getTodoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todoId = new mongoose.Types.ObjectId(req.params.id);
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

// Create a new todo
export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    next(err);
  }
};

// Update a todo by ID
export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todoId = new mongoose.Types.ObjectId(req.params.id);
    const todo = await Todo.findByIdAndUpdate(todoId, req.body, { new: true });
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

// Partially update a todo by ID
export const partialUpdateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todoId = new mongoose.Types.ObjectId(req.params.id);
    const todo = await Todo.findByIdAndUpdate(todoId, req.body, { new: true });
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

// Delete a todo by ID
export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todoId = new mongoose.Types.ObjectId(req.params.id);
    const todo = await Todo.findByIdAndDelete(todoId);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    next(err);
  }
};
