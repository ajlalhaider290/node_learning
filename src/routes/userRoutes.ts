import { Router } from 'express';
import * as userController from '../controllers/userController';
import * as middleware from '../middlewares/validationMiddleware';

const router = Router();

router.use(middleware.getTime)

router.route('/')
.get(userController.getAllUsersController)
.post(middleware.validateUserBody, middleware.getTime, userController.createUserController);
router.route('/:id')
.get(middleware.validateUserIdQuery, middleware.getID, userController.getUserByIdController)
.put(middleware.validateUserIdQuery, middleware.getID, userController.updateUserController)
.patch(middleware.validateUserIdQuery, middleware.getID, userController.partialUpdateUserController)
.delete(middleware.validateUserIdQuery, middleware.getID, userController.deleteUserController);
router.get('/:id/todos', middleware.validateUserIdQuery, middleware.getID, userController.getUserTodosController);
router.get('/:id/todos/:todoId', middleware.validateUserIdQuery, middleware.getID, userController.getUserTodoByIdController);

export default router;
