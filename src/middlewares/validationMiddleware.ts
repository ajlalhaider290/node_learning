import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/customError';
import mongoose from 'mongoose';

export const validateUserBody = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, isDisabled } = req.body;

  if (!name || typeof name !== 'string') {
    throw new CustomError('Invalid or missing name', 400);
  }
  
  if (!email || typeof email !== 'string') {
    throw new CustomError('Invalid or missing Email', 400);
  }
  
  if (!password || typeof password !== 'string') {
    throw new CustomError('Invalid or missing password', 400);
  }
  
  if (typeof isDisabled !== 'boolean') {
    throw new CustomError('Invalid or missing isDisabled flag', 400);
  }
  
  next();
};

export const validateUserIdQuery = (req: Request, res: Response, next: NextFunction) => {
  const userId = new mongoose.Types.ObjectId(req.params.id);
    if (!userId) {
      throw new CustomError('Invalid or missing user ID', 400);
    }
    next();
  };

export const getTime = (req: Request, res: Response, next: NextFunction) => {
    console.log('Time:', Date.now())
    next()
};

export const getID = (req: Request, res: Response, next: NextFunction) => {
    console.log('ID:', req.params.id)
    next()
};

