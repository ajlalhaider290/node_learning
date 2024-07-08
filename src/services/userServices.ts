import mongoose from 'mongoose';
import User from '../models/users';
import Todo from '../models/todos';

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
