import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";

const NewTask = ({ addTask }) => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    priority: "",
    location: "",
    progress: "",
    dueDate: "",
    file: null,
    comments: [],
  });

  const submitForm = (e) => {
    e.preventDefault();
    addTask({ ...task, id: uuidv4() });
    navigate("/");
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <TaskForm
      task={task}
      handleSubmit={submitForm}
      handleChange={handleChange}
    />
  );
};

export default NewTask;
