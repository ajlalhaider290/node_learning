import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/manageJWT';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send({ message: 'Invalid token.' });
  }
};
