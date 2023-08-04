import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const TaskForm = ({ task, handleSubmit, handleChange }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        task.file = {
          data: reader.result,
          name: file.name,
        };
      };
      reader.readAsDataURL(file);
    }
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
        </div>
      </div>

      <div className="task-form">
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter project name"
            value={task.title}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            value={task.description}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Priority:</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="urgent">Urgent</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <br />
          <br />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Enter city"
            value={task.location}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Progress (%):</label>
          <input
            type="number"
            name="progress"
            value={task.progress}
            min={0}
            max={100}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Upload File:</label>
          <input type="file" onChange={handleFileChange} />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
