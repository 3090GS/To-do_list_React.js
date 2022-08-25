import cn from "classnames";
import React from "react";
import Check from "../check/Check";
import { BsTrash } from "react-icons/bs";
import "./TodoItem.css";

const TodoItem = ({ todo, removeTodo, changeTodo }) => {
  return (
    <div className="todoItemWrapper">
      <div className="changeTodo">
        <button className="check" onClick={() => changeTodo(todo.id)}>
          <Check isCompleted={todo.isCompleted} />
        </button>
        <p className={cn({ "line-through": todo.isCompleted })}>
          {todo.title}
        </p>
      </div>
      <button className='BsTrash' onClick={() => removeTodo(todo.id)}>
        <BsTrash size={24}/>
      </button>
    </div>
  );
};

export default TodoItem;
