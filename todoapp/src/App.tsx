import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos([...todos, { id, text }]);
  };

  const removeTodoHandler = (todoId : string) => {
    const newTodo = todos.filter((todo : Todo) => {
      return todo.id !== todoId;
    })
    setTodos(newTodo);
  }
  return (
    
    <main className="max-w-6xl mx-auto my-10 px-5 md:px-0">
<h1 className="text-4xl font-bold text-center text-indigo-600 mt-8 tracking-wide drop-shadow-sm">
  Welcome TODO
</h1>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo = {removeTodoHandler}/>
    </main>
  );
}

export default App;