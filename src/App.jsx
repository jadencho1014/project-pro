import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Home from "./components/Home";
import NewTask from "./components/NewTask";
import EditTask from "./components/EditTask";
import About from "./components/About";
import TaskCalendar from "./components/TaskCalendar";
import ProgressChart from "./components/ProgressChart";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <Home tasks={tasks} deleteTask={deleteTask} setTasks={setTasks} />
          }
        />
        <Route path="/new" element={<NewTask addTask={addTask} />} />
        <Route
          path="/edit/:id"
          element={<EditTask tasks={tasks} updateTask={updateTask} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<TaskCalendar tasks={tasks} />} />
        <Route path="/chart" element={<ProgressChart tasks={tasks} />} />
      </Routes>
    </Router>
  );
};

export default App;
