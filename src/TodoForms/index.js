import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForms.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(false);
  };

  //Crea una nueva tarea y evita el submit por defecto de los form
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  //Atrapa el valor de lo que se escribe
  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe una nueva tarea:</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button type="button" className="button-cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="button-add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
