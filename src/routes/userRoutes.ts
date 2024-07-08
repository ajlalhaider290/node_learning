import { Router } from 'express';
import * as userController from '../controllers/userController';
import * as middleware from '../middlewares/validationMiddleware';
import { authenticateJWT } from '../middlewares/authenticationMiddleware';


const router = Router();

router.use(middleware.getTime)

router.route('/')
.get(userController.getAllUsersController)
.post(middleware.validateUserBody, middleware.getTime, authenticateJWT, userController.createUserController);
router.route('/:id')
.get(middleware.validateUserIdQuery, middleware.getID, authenticateJWT, userController.getUserByIdController)
.put(middleware.validateUserIdQuery, middleware.getID, authenticateJWT, userController.updateUserController)
.patch(middleware.validateUserIdQuery, middleware.getID, authenticateJWT, userController.partialUpdateUserController)
.delete(middleware.validateUserIdQuery, middleware.getID, authenticateJWT, userController.deleteUserController);
router.get('/:id/todos', middleware.validateUserIdQuery, authenticateJWT, middleware.getID, userController.getUserTodosController);
router.get('/:id/todos/:todoId', middleware.validateUserIdQuery, middleware.getID, authenticateJWT, userController.getUserTodoByIdController);

// This route helps the user
router.post('/login', userController.loginUser);


router.get('/api/protected', authenticateJWT, (req, res) => {
  res.send({ message: 'This is a protected route', user: req.user });
});
export default router;
