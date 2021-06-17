import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";

function TableSearch({ onSearch }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Employee Directory</Navbar.Brand>
      <Form className="ml-auto" inline>
        <FormControl
          onChange={event => onSearch(event.target.value)}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
      </Form>
    </Navbar>
  );
}

export default React.memo(TableSearch);
