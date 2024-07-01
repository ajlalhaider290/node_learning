export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isDisabled: boolean;
  createdDate: Date;
  updatedDate: Date;
}

export interface Todo {
  id: number;
  title: string;
  userId: number;
  isCompleted: boolean;
  createdDate: Date;
  updatedDate: Date;
}
