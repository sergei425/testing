import { useState, useEffect } from "react";
import { useTodos } from "../../TodoProvider";
import "./style.less";

export default function Form({ todoId, getId }) {
  const { addTodo, updateTodo, todos } = useTodos();

  const todo = todos.find((el) => Object.is(el.id, todoId));

  const [formData, setFormData] = useState({
    title: "",
    data: "",
    discription: "",
    file: null,
  });

  useEffect(() => {
    const getService = () => {
      if (todo) {
        const { title, data, discription } = todo;
        setFormData({ ...formData, title, data, discription });
      }
    };

    getService();
  }, [todo]);

  function fieldChangeHandle(evt) {
    if (evt.target.name === 'file') {
      const value = evt.target.files[0]

      const { name } = evt.target;
      setFormData({ ...formData, [name]: value });
    }
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const submit = (evt) => {
    evt.preventDefault();
    if (todo) {
      updateTodo({ todoId, ...formData });
    } else {
      addTodo(formData);
    }
    formReset(evt);
  };

  const formReset = (evt) => {
    setFormData({
      ...formData,
      title: "",
      discription: "",
      file: null,
      data: "",
    });
    getId(0);
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        type="text"
        name="title"
        placeholder="todo title..."
        onChange={fieldChangeHandle}
        value={formData.title || ""}
      />
      <input
        type="text"
        name="data"
        placeholder="todo date..."
        onChange={fieldChangeHandle}
        value={formData.data}
      />
      <textarea
        placeholder="todo discription..."
        name="discription"
        onChange={fieldChangeHandle}
        value={formData.discription || ""}
        
      />
      <input
        type="file"
        name="file"
        onChange={fieldChangeHandle}
        value={formData.file || ""}
      />
      <button className="form__btn">ADD</button>
    </form>
  );
}
