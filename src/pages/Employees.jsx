import { useState, useCallback } from "react";
import Container from "react-bootstrap/Container";
import EmployeeTable from "../components/EmployeeTable";
import TableSearch from "../components/TableSearch";

export default function Employees() {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = useCallback(value => {
    setSearchValue(value);
  }, []);

  return (
    <Container className="py-5">
      <header>
        <TableSearch onSearch={searchHandler} />
      </header>
      <main>
        <EmployeeTable searchValue={searchValue} />
      </main>
    </Container>
  );
}
