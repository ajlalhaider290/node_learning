import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/customError';

// This is a centralized error handling middleware
export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
  
    if (err instanceof CustomError) {
      return res.status(err.statusCode).json({
        message: err.message,
        details: err.details,
      });
    }
  
    res.status(500).json({
      message: 'Internal Server Error',
    });
  };