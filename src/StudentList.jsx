// src/StudentList.jsx
import React from "react";

const StudentList = () => {
  // Step 1: Create a list of students
  const students = [
    { id: 1, name: "Gani" },
    { id: 2, name: "Mahesh" },
    { id: 3, name: "Harini" },
    { id: 4, name: "Sai" }
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {/* Step 2: Use map() to render students */}
        {students.map((student) => (
          <li key={student.id}>{student.name}</li> // Step 3: unique key
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
