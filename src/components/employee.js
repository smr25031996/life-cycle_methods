import React, { useState, useEffect } from "react";
import axios from "axios";
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const addEmp = () => {
    setEmployees([
      ...employees,
      { empId: 6789, name: "Clara", designation: "TL" },
    ]);
    alert("added the employee")
  };

  useEffect(() => {
    axios
      .get("http://localhost:4500/employee")
      .then((result) => setEmployees(result.data))
      .then((err) => console.log(err));
  }, []);
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={addEmp}>Add Employee</button>
    </React.Fragment>
  );
};

export default Employees;
