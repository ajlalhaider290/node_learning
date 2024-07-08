import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET as string;

if (!secretKey) {
  throw new Error('JWT secret key is not defined in the environment variables');
}

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, secretKey);
};
