"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const todo_1 = require("../models/todo");
// Get all todos
const getTodos = (req, res) => {
    res.json({ todos: todo_1.TODOS });
};
exports.getTodos = getTodos;
// Create a new todo
const createTodo = (req, res) => {
    const { text } = req.body;
    const newTodo = {
        id: Math.random().toString(),
        text,
    };
    todo_1.TODOS.push(newTodo);
    res.status(201).json({ message: "Todo created", todo: newTodo });
};
exports.createTodo = createTodo;
// Update a todo
const updateTodo = (req, res) => {
    const { todoId } = req.params;
    const { text } = req.body;
    const todo = todo_1.TODOS.find((t) => t.id === todoId);
    if (!todo) {
        res.status(404).json({ message: "Todo not found" });
        return;
    }
    todo.text = text;
    res.json({ message: "Todo updated", todo });
};
exports.updateTodo = updateTodo;
// Delete a todo
const deleteTodo = (req, res) => {
    const { todoId } = req.params;
    const index = todo_1.TODOS.findIndex((t) => t.id === todoId);
    if (index === -1) {
        res.status(404).json({ message: "Todo not found" });
        return;
    }
    todo_1.TODOS.splice(index, 1);
    res.json({ message: "Todo deleted" });
};
exports.deleteTodo = deleteTodo;
