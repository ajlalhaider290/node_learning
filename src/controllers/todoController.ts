import { Request, Response } from 'express';
import * as todoService from '../services/todoService';

export const getAllTodos = (req: Request, res: Response) => {
  const todos = todoService.getAllTodos();
  res.json(todos);
};

export const getTodoById = (req: Request, res: Response) => {
  const todo = todoService.getTodoById(req.params.id);
  res.json(todo);
};

export const createTodo = (req: Request, res: Response) => {
  const newTodo = todoService.createTodo(req.body);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const updatedTodo = todoService.updateTodo(req.params.id, req.body);
  res.json(updatedTodo);
};

export const partialUpdateTodo = (req: Request, res: Response) => {
  const updatedTodo = todoService.partialUpdateTodo(req.params.id, req.body);
  res.json(updatedTodo);
};

export const deleteTodo = (req: Request, res: Response) => {
  todoService.deleteTodo(req.params.id);
  res.status(204).send();
};
