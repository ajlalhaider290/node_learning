export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isDisabled: boolean;
    createdDate: Date;
    updatedDate: Date;
  }
  
  export let users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: '123456', isDisabled: false, createdDate: new Date(), updatedDate: new Date() },
  ];
  
  export const getAllUsers = (): User[] => {
    return users;
  };
  
  export const getUserById = (id: string): User | undefined => {
    return users.find(user => user.id === parseInt(id));
  };
  
  export const createUser = (user: Omit<User, 'id' | 'createdDate' | 'updatedDate'>): User => {
    const newUser = { ...user, id: users.length + 1, createdDate: new Date(), updatedDate: new Date() };
    users.push(newUser);
    return newUser;
  };
   
  export const updateUser = (id: string, updatedData: Partial<User>): User | undefined => {
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
      Object.assign(user, updatedData, { updatedDate: new Date() });
      return user;
    }
    return undefined;
  };
  
  export const partialUpdateUser = (id: string, updatedData: Partial<User>): User | undefined => {
    return updateUser(id, updatedData);
  };
  
  export const deleteUser = (id: string): void => {
    users = users.filter(user => user.id !== parseInt(id));
  };
  
  export const getUserTodos = (userId: string): any[] => {
    return [
      { id: 1, title: 'Todo 1', userId: parseInt(userId), isCompleted: false, createdDate: new Date(), updatedDate: new Date() },
    ];
  };
  
  export const getUserTodoById = (userId: string, todoId: string): any => {
    return { id: parseInt(todoId), title: 'Todo 1', userId: parseInt(userId), isCompleted: false, createdDate: new Date(), updatedDate: new Date() };
  };
  