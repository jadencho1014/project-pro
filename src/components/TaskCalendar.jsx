import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ThemeToggleButton from "./ThemeToggleButton";

const localizer = momentLocalizer(moment);

const eventStyleGetter = (event, start, end, isSelected) => {
  return {
    style: {
      backgroundColor: "#e86161",
    },
  };
};

const TaskCalendar = ({ tasks }) => {
  const events = tasks.map((task) => {
    const [year, month, day] = task.dueDate.split("-").map(Number);
    return {
      title: task.title,
      start: new Date(year, month - 1, day),
      end: new Date(year, month - 1, day),
      allDay: true,
    };
  });

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
      <div className="calendar">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </div>
  );
};

export default TaskCalendar;
