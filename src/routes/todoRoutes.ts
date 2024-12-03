import express, { Router } from 'express';
import * as todoController from '../controllers/todoController';
import * as middleware from '../middlewares/validationMiddleware';

const router = Router();

// This is an application level middleware and will run for all routes
router.use(middleware.getTime)

router.get('/', todoController.getAllTodosController);

// These are router-level middleware and will run only for this specific route
router.get('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.getTodoByIdController);
router.post('/', todoController.createTodoController);
router.put('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.updateTodoController);
router.patch('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.partialUpdateTodoController);
router.delete('/:id', middleware.validateUserIdQuery, middleware.getID, todoController.deleteTodoController);

export default router;
