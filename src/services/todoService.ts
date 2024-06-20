interface Todo {
    id: number;
    title: string;
    userId: number;
    isCompleted: boolean;
    createdDate: Date;
    updatedDate: Date;
  }
  
  let todos: Todo[] = [
    { id: 1, title: 'Todo 1', userId: 1, isCompleted: false, createdDate: new Date(), updatedDate: new Date() },
  ];
  
  export const getAllTodos = (): Todo[] => {
    return todos;
  };
  
  export const getTodoById = (id: string): Todo | undefined => {
    return todos.find(todo => todo.id === parseInt(id));
  };
  
  export const createTodo = (todo: Omit<Todo, 'id' | 'createdDate' | 'updatedDate'>): Todo => {
    const newTodo = { ...todo, id: todos.length + 1, createdDate: new Date(), updatedDate: new Date() };
    todos.push(newTodo);
    return newTodo;
  };
  
  export const updateTodo = (id: string, updatedData: Partial<Todo>): Todo | undefined => {
    const todo = todos.find(todo => todo.id === parseInt(id));
    if (todo) {
      Object.assign(todo, updatedData, { updatedDate: new Date() });
      return todo;
    }
    return undefined;
  };
  
  export const partialUpdateTodo = (id: string, updatedData: Partial<Todo>): Todo | undefined => {
    return updateTodo(id, updatedData);
  };
  
  export const deleteTodo = (id: string): void => {
    todos = todos.filter(todo => todo.id !== parseInt(id));
  };
  