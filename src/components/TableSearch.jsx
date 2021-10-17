import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";

function TableSearch({ onSearch }) {
  return (
    <Navbar className="d-block d-sm-flex" bg="dark" variant="dark">
      <Navbar.Brand>Employee Directory</Navbar.Brand>
      <Form className="ml-auto" inline>
        <FormControl
          onChange={event => onSearch(event.target.value)}
          type="text"
          placeholder="Search"
          className="my-2 my-sm-0"
        />
      </Form>
    </Navbar>
  );
}

export default React.memo(TableSearch);
