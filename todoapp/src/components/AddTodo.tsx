import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!text.trim()) return;
    onAddTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl mx-auto mt-10"
    >
      <Input
        onChange={changeEventHandler}
        value={text}
        type="text"
        placeholder="Write a new todo..."
        className="flex-1 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 rounded-lg px-4 py-3 transition duration-300"
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition-all duration-300"
      >
        Add Todo
      </Button>
    </form>
  );
};

export default AddTodo;
