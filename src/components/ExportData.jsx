import React from "react";
import Papa from "papaparse";
import { saveAs } from "file-saver";

const ExportData = ({ tasks }) => {
  const handleClick = () => {
    const tasksFilter = tasks.map((task) => {
      const { file, comments, ...tasksFilter } = task;
      return tasksFilter;
    });

    const csv = Papa.unparse(tasksFilter);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "data.csv");
  };

  return (
    <div>
      <button onClick={handleClick}>Export Projects (.csv)</button>
    </div>
  );
};

export default ExportData;
