import React from "react";
import Button from "react-bootstrap/Button";

function Tags(props) {
  return (
    <Button variant={props.color} className="btn-general">
      {props.raza}
    </Button>
  );
}

export default Tags;
