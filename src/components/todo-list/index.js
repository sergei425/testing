import Todo from "../todo";
import { useTodos } from "../../TodoProvider";
import './style.less'

export default function TodoList({getId}) {
  const { todos } = useTodos();

  if (!todos.length) return <div className="no-todos">No Todos Listed. (Add a Todo)</div>;

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} getId={getId}/>
      ))}
    </div>
  );
}
