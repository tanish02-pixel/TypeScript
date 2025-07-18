// models/todo.ts
export interface Todo {
  id: string;
  text: string;
}

// Simulating a database
export const TODOS: Todo[] = [];

// interface Todo: defines the shape of a todo object: { id, text }

// TODOS: an array to store all todos (temporary, like a fake database in memory).
