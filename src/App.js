import TodoList from "./components/todo-list";
import Form from "./components/form";
import { useState } from 'react';

export default function App() {
  const [id, setId] = useState(null)

  return (
    <>
      <Form todoId={id} getId={setId}/>
      <TodoList getId={setId}/>
    </>
  );
}
