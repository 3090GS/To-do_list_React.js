import React, { useState } from "react";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import TodoItem from "./item/todo-item/TodoItem";
import "./TodoList.css";

const data = [];

const TodoList = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
          todo={todo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
