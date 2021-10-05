import React from 'react';
import {useSelector} from "react-redux";

const TodosHeading = () => {
  const todos = useSelector(s => s.todos)
  return (
    <div className="d-flex justify-content-between align-items-center mt-5">
      <h2>Todos</h2>
      <span>Total: {todos.length}</span>
    </div>
  );
};

export default TodosHeading;