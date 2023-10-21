import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          delete
        </button>
        {/* <button className="btn btn-sm btn-danger" onClick={onDelete}>delete</button> */}
        {/* here arrow function is used so to call the ondelete methin only when the click event is done */}
      </div>
      <hr />
    </>
  );
};
