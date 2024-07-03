import mongoose from 'mongoose';
import User, { IUser } from '../models/users';
import Todo from '../models/todos';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/manageJWT';
import { CustomError } from '../utils/customError';

export const getAllUsers = async () => {
  return await User.find();
};

export const getUserById = async (userId: string) => {
  return await User.findById(new mongoose.Types.ObjectId(userId));
};

export const createUser = async (userData: any) => {
  const user = new User(userData);
  return await user.save();
};

export const updateUser = async (userId: string, userData: any) => {
  return await User.findByIdAndUpdate(new mongoose.Types.ObjectId(userId), userData, { new: true });
};

export const deleteUser = async (userId: string) => {
  return await User.findByIdAndDelete(new mongoose.Types.ObjectId(userId));
};

export const getUserTodos = async (userId: string) => {
  return await Todo.find({ userId: new mongoose.Types.ObjectId(userId) });
};

export const getUserTodoById = async (userId: string, todoId: string) => {
  return await Todo.findOne({ _id: new mongoose.Types.ObjectId(todoId), userId: new mongoose.Types.ObjectId(userId) });
};

export const getAuthToken = async (email: string, password: string) => {
  const user = await User.findOne({ email }) as IUser | null;
  if (!user) {
    throw new CustomError('Invalid email or password.', 400);
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new CustomError('Invalid email or password.', 400);
  }
  const id = user._id as IUser;
  const token = generateToken(id.toString());
  return token;
}