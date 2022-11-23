import React, { createContext, useState, useContext } from "react";

import { v4 } from "uuid";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = ({ title, discription, file, data }) =>
    setTodos([
      ...todos,
      {
        id: v4(),
        data,
        title,
        discription,
        file,
      },
    ]);

const updateTodo = ({ todoId, title, discription, data }) =>
  setTodos(
    todos.map((todo) =>
      todo.id === todoId ? { ...todo, title, discription, data } : todo
    )
  );

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
