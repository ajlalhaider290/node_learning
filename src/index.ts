import express, { Application, Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import todoRoutes from './routes/todoRoutes';
import { errorHandler } from './middlewares/errorHandler';
import connectDB from './database';

const app: Application = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });