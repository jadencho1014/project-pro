import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comment from "./Comment";

const Task = ({ task, deleteTask, addComment }) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${task.location}&units=metric&appid=fd4b226313eccfec60d764e4a4833256`;

  const searchWeather = (event) => {
    axios
      .get(URL)
      .then((res) => {
        if (res.data.weather && res.data.weather[0].id < 800) {
          toast.error("The weather is not suitable for this project!");
        } else if (res.data.weather) {
          toast.success("The weather is suitable for this project!");
        }
      })
      .catch((error) => {
        toast.error("Please enter a valid city.");
      });
  };

  const taskStatus = () => {
    let progress = Number(task.progress);
    if (progress === 0) {
      return "Not Started";
    } else if (progress === 100) {
      return "Completed";
    } else {
      return "In Progress";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addComment(task.id, e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="task">
      <h2>{task.title}</h2>
      <p className="description">{task.description}</p>
      <p>
        Priority:&nbsp;{task.priority}&nbsp;&nbsp;&nbsp;&nbsp;Location:&nbsp;
        {task.location}&nbsp;&nbsp;&nbsp;&nbsp;Progress:&nbsp;{task.progress}
        %&nbsp;(
        {taskStatus()})&nbsp;&nbsp;&nbsp;&nbsp;Due:&nbsp;{task.dueDate}
      </p>
      <p>
        File:{" "}
        {task.file ? (
          <a href={task.file.data} download={task.file.name}>
            {task.file.name}
          </a>
        ) : (
          "N/A"
        )}
      </p>

      <h3>Comments</h3>
      {task.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <input
        type="text"
        onKeyDown={handleKeyPress}
        placeholder="Add a comment..."
      />
      <br />

      <div className="bottom-buttons">
        <button onClick={searchWeather}>Check Weather</button>
        <Link to={`/edit/${task.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Task;
