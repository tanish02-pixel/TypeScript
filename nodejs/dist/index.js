"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
const PORT = 8080;
// Middleware to parse JSON body
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Mount routes
app.use(todo_1.default);
// Global error handler (typos fixed)
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT, () => {
    console.log(`✅ SERVER STARTED AT PORT ${PORT}`);
});
