import { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import EmployeeTable from "./components/EmployeeTable";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Employee Directory</Navbar.Brand>
        </Container>
      </Navbar>
      <main>
        <EmployeeTable />
      </main>
    </Fragment>
  );
}

export default App;
