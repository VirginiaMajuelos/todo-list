import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  //forma de cambia true o false si cambia. En un mismo botón puede cerrar y abrir
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
