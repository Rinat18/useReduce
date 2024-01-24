import React from "react";
import { NavLink } from "react-router-dom";

const TodoItem = ({ name, usename, email, id }) => {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <div>{usename}</div>
        <span>{email}</span>
        <NavLink to={`details/${id}`}>
          <button>Detail</button>
        </NavLink>
      </div>
    </div>
  );
};

export default TodoItem;
