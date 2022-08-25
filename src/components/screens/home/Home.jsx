import { TaskSharp } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./TodoList.css";

const Home = () => {
  return (
    <>
      <Typography variant="h3">This is Home</Typography>
      <button>Add a photo</button>
      <input type="file" multiple accept="image/*"></input>
    </>
  );
};

export default Home;
