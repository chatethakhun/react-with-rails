import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddTodo = () => {
  const [todo, setTodo] = useState([]);
  const submitTodo = event => {
    event.preventDefault();
    console.log(event.currentTarget);
  };
  return (
    <Form onSubmit={submitTodo}>
      <Form.Group>
        <Form.Label>Todo</Form.Label>
        <Form.Control
          type="text"
          onChange={evt => {
            setTodo(evt.target.value);
          }}
          value={todo}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddTodo;
