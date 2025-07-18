"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controller/todo");
const router = express_1.default.Router();
router.get("/todo", todo_1.getTodos);
router.post("/todo", todo_1.createTodo);
router.patch("/todo/:todoId", todo_1.updateTodo);
router.delete("/todo/:todoId", todo_1.deleteTodo);
exports.default = router;
