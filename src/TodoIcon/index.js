import React from "react";
import "./TodoIcon.css";
import { ReactComponent as CheckCircle } from "./check.svg";
import { ReactComponent as Close } from "./close.svg";

const iconType = {
  check: (color) => (
    <CheckCircle className="Icon-svg Icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <Close className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = "gray", onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconType[type](color)}
    </span>
  );
}

export { TodoIcon };
