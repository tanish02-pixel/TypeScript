import { Request, Response } from "express";
import { TODOS, Todo } from "../models/todo";

// Get all todos
export const getTodos = (req: Request, res: Response): void => {
  res.json({ todos: TODOS });
};

// Create a new todo
export const createTodo = (req: Request, res: Response): void => {
  const { text }: { text: string } = req.body;

  const newTodo: Todo = {
    id: Math.random().toString(),
    text,
  };

  TODOS.push(newTodo);
  res.status(201).json({ message: "Todo created", todo: newTodo });
};

// Update a todo
export const updateTodo = (req: Request, res: Response): void => {
  const { todoId } = req.params;
  const { text }: { text: string } = req.body;

  const todo = TODOS.find((t) => t.id === todoId);

  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  todo.text = text;
  res.json({ message: "Todo updated", todo });
};

// Delete a todo
export const deleteTodo = (req: Request, res: Response): void => {
  const { todoId } = req.params;

  const index = TODOS.findIndex((t) => t.id === todoId);

  if (index === -1) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  TODOS.splice(index, 1);
  res.json({ message: "Todo deleted" });
};
