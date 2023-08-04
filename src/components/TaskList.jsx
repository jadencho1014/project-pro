import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, setTasks }) => {
  const sortedTasks = tasks.sort((a, b) => {
    const priorityValues = {
      urgent: 4,
      high: 3,
      medium: 2,
      low: 1,
    };

    return priorityValues[b.priority] - priorityValues[a.priority];
  });

  const formatAMPM = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    return `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
  };

  const addCommentToTask = (taskId, commentText) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === taskId);
    const newDate = new Date();

    task.comments.push({
      text: commentText,
      date: formatAMPM(newDate),
    });

    setTasks(newTasks);
  };

  return (
    <div>
      {sortedTasks.map((task) => (
        <Task
          task={task}
          deleteTask={deleteTask}
          addComment={addCommentToTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
