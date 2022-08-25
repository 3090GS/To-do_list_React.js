import { TextField } from "@mui/material";
import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import './CreateTodoField.css';

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const alertAddTask = () => {
    alert({ title: "Type in a task first" });
  };

  const addTodo = (title) => {
    if (title !== "") {
      setTodos((prev) => [
        {
          id: new Date(),
          title,
          isCompleted: false,
        },
        ...prev,
      ]);
      setTitle("");
    } else {
      alertAddTask();
    }
  };

  return (
    <div className="fieldWrapper">
      <TextField
        sx={{ mr: 2}}
        fullWidth
        label='Add a task'
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
        color="secondary"
        variant="outlined"
        value={title}
      />
      <button className='buttonWrapper' onClick={() => addTodo(title)}>
        <BiAddToQueue
          size={24}
        />
      </button>
    </div>
  );
};

export default CreateTodoField;
