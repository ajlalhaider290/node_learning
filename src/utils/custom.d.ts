import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }
}
