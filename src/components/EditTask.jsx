import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "./TaskForm";

const EditTask = ({ tasks, updateTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedTask, setSelectedTask] = useState({
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

  useEffect(() => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setSelectedTask(taskToEdit);
  }, [id, tasks]);

  const submitForm = (e) => {
    e.preventDefault();
    updateTask(selectedTask);
    navigate("/");
  };

  const handleChange = (e) => {
    setSelectedTask({ ...selectedTask, [e.target.name]: e.target.value });
  };

  return (
    <TaskForm
      task={selectedTask}
      handleSubmit={submitForm}
      handleChange={handleChange}
    />
  );
};

export default EditTask;
