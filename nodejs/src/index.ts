import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todo";

const app = express();
const PORT = 8080;

// Middleware to parse JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Mount routes
app.use(todoRoutes);

// Global error handler (typos fixed)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`✅ SERVER STARTED AT PORT ${PORT}`);
});
