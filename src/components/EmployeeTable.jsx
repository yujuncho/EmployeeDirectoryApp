import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import styles from "./EmployeeTable.module.css";

export default function EmployeeTable() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(
        "https://randomuser.me/api?results=10&gender=male"
      );
      const data = await response.json();
      const fetchedEmployees = data.results;
      setEmployeeList(fetchedEmployees);
    };
    fetchEmployees();
  }, []);

  const employeeRows = employeeList.map(employee => {
    return (
      <tr key={employee.login.uuid}>
        <td>
          <img
            src={employee.picture.thumbnail}
            alt={`${employee.name.first} ${employee.name.last}`}
          />
        </td>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.phone}</td>
        <td>{employee.email}</td>
      </tr>
    );
  });

  return (
    <Container className={styles["employee-table"]}>
      <Table bordered>
        <thead>
          <tr>
            <th>Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{employeeRows}</tbody>
      </Table>
    </Container>
  );
}
