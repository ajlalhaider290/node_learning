import { Router } from 'express';
import * as userController from '../controllers/userController';
import * as middleware from '../middlewares/validationMiddleware';

const router = Router();

router.use(middleware.getTime)

router.route('/')
.get(userController.getAllUsers)
.post(middleware.validateUserBody, middleware.getTime, userController.createUser);
router.route('/:id')
.get(middleware.validateUserIdQuery, middleware.getID, userController.getUserById)
.put(middleware.validateUserIdQuery, middleware.getID, userController.updateUser)
.patch(middleware.validateUserIdQuery, middleware.getID, userController.partialUpdateUser)
.delete(middleware.validateUserIdQuery, middleware.getID, userController.deleteUser);
router.get('/:id/todos', middleware.validateUserIdQuery, middleware.getID, userController.getUserTodos);
router.get('/:id/todos/:todoId', middleware.validateUserIdQuery, middleware.getID, userController.getUserTodoById);

export default router;
