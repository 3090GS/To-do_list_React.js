import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerItem from "./components/layout/DrawerItem";
import Home from "./components/screens/home/Home";
import TodoList from "./components/screens/todo-list/TodoList";
import Header from "../src/components/layout/Header";
import { useState } from "react";
import './App.css'

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Header setDrawerOpen={setDrawerOpen} isDrawerOpen={isDrawerOpen} />
        <DrawerItem setDrawerOpen={setDrawerOpen} isDrawerOpen={isDrawerOpen} />
      </div>
      <div className="componentWrapper">
        <Routes>
          <Route exact path="/todo" element={<TodoList />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
