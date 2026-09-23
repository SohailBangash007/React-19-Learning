import React from "react";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const BootsTrap = () => {
  return (
    <div>
      <h1>How To use BootsTrap</h1>
      <Alert variant="danger"> Alert Hello bootstrap </Alert>

      <Button variant="secondary">Hello Dear</Button>
      <Button variant="primary">Hello Dear</Button>
      <Button variant="warning">Hello Dear</Button>
      <Button variant="dark">Hello Dear</Button>
      <Button variant="success">Hello Dear</Button>
    </div>
  );
};

export default BootsTrap;
