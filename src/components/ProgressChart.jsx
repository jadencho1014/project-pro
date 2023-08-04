import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";

const ProgressChart = ({ tasks }) => {
  const data = tasks.map((task) => ({
    name: task.title,
    Progress: task.progress,
  }));

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
        </div>
      </div>
      <div className="progress-chart">
        <BarChart
          width={window.innerWidth * 0.6}
          height={window.innerHeight * 0.6}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Progress" fill="#d51111" />
        </BarChart>
      </div>
    </div>
  );
};

export default ProgressChart;
