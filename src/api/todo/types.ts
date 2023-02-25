export interface createTodoType {
  todo: string;
}

export interface updateTodoType {
  todo: string;
  isCompleted: boolean;
  id: number;
}

export interface deleteTodoType {
  id: number;
}
