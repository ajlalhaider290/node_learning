import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);
router.route('/:id')
.get(userController.getUserById)
.put(userController.updateUser)
.patch(userController.partialUpdateUser)
.delete(userController.deleteUser);
router.get('/:id/todos', userController.getUserTodos);
router.get('/:id/todos/:todoId', userController.getUserTodoById);

export default router;
