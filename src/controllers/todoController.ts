import { Request, Response, NextFunction } from 'express';
import * as todoServices from '../services/todoServices';

// Get all todos
export const getAllTodosController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos = await todoServices.getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    next(err);
  }
};

// Get a todo by ID
export const getTodoByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoServices.getTodoById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

// Create a new todo
export const createTodoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoServices.createTodo(req.body);
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};

// Update a todo by ID
export const updateTodoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoServices.updateTodo(req.params.id, req.body);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

// Partially update a todo by ID
export const partialUpdateTodoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoServices.updateTodo(req.params.id, req.body);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

// Delete a todo by ID
export const deleteTodoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoServices.deleteTodo(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    next(err);
  }
};
