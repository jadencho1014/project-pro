import React from "react";
import Papa from "papaparse";

const ImportData = ({ setTasks }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        complete: function (results) {
          const newTasks = results.data.map((task) => ({
            id: task.id,
            title: task.title,
            description: task.description,
            priority: task.priority,
            location: task.location,
            progress: task.progress,
            dueDate: task.dueDate,
            file: null,
            comments: [],
          }));

          setTasks((prevTasks) => [...prevTasks, ...newTasks]);
        },
      });
    }
  };

  return (
    <div className="import-data">
      <label for="file-upload" className="custom-file-upload">
        Import Projects (.csv)
      </label>
      <input
        type="file"
        id="file-upload"
        accept=".csv"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default ImportData;
