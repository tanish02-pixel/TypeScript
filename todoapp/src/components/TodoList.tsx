import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Delete } from "lucide-react";

type TodoListProps = {
  items: { id: string; text: string }[];
  onRemoveTodo: (todoId: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, onRemoveTodo }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl mx-auto mt-6 px-4">
      {items.map((todo) => (
        <Card
          key={todo.id}
           className="bg-white text-black shadow-md border border-gray-200 rounded-lg"
        >
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="font-medium truncate w-[85%]">
              {todo.text}
            </CardTitle>
            <Button
              onClick={() => onRemoveTodo(todo.id)}
              className="h-8 w-8"
              variant="destructive"
              size="icon"
            >
              <Delete className="h-4 w-4" />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
