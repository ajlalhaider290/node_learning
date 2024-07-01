import { Request, Response, NextFunction } from 'express';
import * as userServices from '../services/userServices';

// Get all users
export const getAllUsersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userServices.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// Get a user by ID
export const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userServices.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// Create a new user
export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userServices.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// Update a user by ID
export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userServices.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// Partially update a user by ID
export const partialUpdateUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userServices.partialUpdateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// Delete a user by ID
export const deleteUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userServices.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};

// Get all todos for a user
export const getUserTodosController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos = await userServices.getUserTodos(req.params.id);
    res.status(200).json(todos);
  } catch (err) {
    next(err);
  }
};

// Get a specific todo for a user
export const getUserTodoByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await userServices.getUserTodoById(req.params.id, req.params.todoId);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};
