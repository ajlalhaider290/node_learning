import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
  const user = userService.getUserById(req.params.id);
  res.json(user);
};

export const createUser = (req: Request, res: Response) => {
  const newUser = userService.createUser(req.body);
  res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response) => {
  const updatedUser = userService.updateUser(req.params.id, req.body);
  res.json(updatedUser);
};

export const partialUpdateUser = (req: Request, res: Response) => {
  const updatedUser = userService.partialUpdateUser(req.params.id, req.body);
  res.json(updatedUser);
};

export const deleteUser = (req: Request, res: Response) => {
  userService.deleteUser(req.params.id);
  res.status(204).send();
};

export const getUserTodos = (req: Request, res: Response) => {
  const todos = userService.getUserTodos(req.params.id);
  res.json(todos);
};

export const getUserTodoById = (req: Request, res: Response) => {
  const todo = userService.getUserTodoById(req.params.id, req.params.todoId);
  res.json(todo);
};
