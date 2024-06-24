import express, { Router } from 'express';
import * as todoController from '../controllers/todoController';
import * as middleware from '../middlewares/validationMiddleware';

const router = Router();

// This is an application level middleware and will run for all routes
router.use(middleware.getTime)

router.get('/', todoController.getAllTodos);

// These are router-level middleware and will run only for this specific route
router.get('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.getTodoById);
router.post('/', todoController.createTodo);
router.put('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.updateTodo);
router.patch('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.partialUpdateTodo);
router.delete('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.deleteTodo);

export default router;
