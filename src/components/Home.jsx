import React from "react";
import { Link } from "react-router-dom";
import TaskList from "./TaskList";
import ExportData from "./ExportData";
import ImportData from "./ImportData";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";

const Home = ({ tasks, deleteTask, setTasks }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="header">
        <div>
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={handleLogoClick}
          />
        </div>
        <div className="top-right-buttons">
          <Link to="/about">About</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/chart">Chart</Link>
          <ThemeToggleButton />
        </div>
      </div>

      <div className="home">
        <div className="task-options">
          <Link to="/new">
            <button>Add New Project</button>
          </Link>

          <ImportData setTasks={setTasks} />

          <ExportData tasks={tasks} />
        </div>

        <TaskList tasks={tasks} deleteTask={deleteTask} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Home;
