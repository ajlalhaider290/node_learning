import express, { Application, Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import todoRoutes from './routes/todoRoutes';
import { errorHandler } from './middlewares/errorHandler';
import connectToDB from './services/databaseService';
import './cronJobs/todoCrons';

const app: Application = express();

// Connect to MongoDB
connectToDB();

app.use(express.json());

// routes
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

// error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });