import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todo";

const router = express.Router();

router.get("/todo", getTodos);
router.post("/todo", createTodo);
router.patch("/todo/:todoId", updateTodo);
router.delete("/todo/:todoId", deleteTodo);

export default router;
