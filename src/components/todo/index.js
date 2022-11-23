import { useTodos } from "../../TodoProvider";
import { ImBin2, ImPencil } from "react-icons/im";
import dayjs from 'dayjs'
import './style.less'

export default function Todo({ id, title, discription, data, getId }) {
  const { removeTodo, updateTodo } = useTodos();

  const takeId = (id) => {
    updateTodo(id)
    getId(id)
  }

  const data1 = dayjs(data.split('.').reverse().join('-'))
  const data2 = dayjs(+new Date())

  return (
    <section className="todo">
      <div className="todo__buton-wrap">
        <button onClick={() => removeTodo(id)}>
        <ImBin2/>
      </button>
      <button onClick={() => takeId(id)}>
        <ImPencil/>
      </button>
      </div>
      <div className="todo__wrap">
        {data1.diff(data2, 'ms') < 0 &&<p className="todo__time-warning">просроченная задача</p>}
        <h2>{title}</h2>
        <span>{data}</span>
        <p>{discription}</p>
      </div>
    </section>
  );
}
