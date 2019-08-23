import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

const AddTodo = () => {
  const [todo, setTodo] = useState([]);
  const [description, setDescription] = useState('');
  const [errorDescription, setErrorDescription] = useState('');
  const [errorText, setErrorText] = useState('');
  const submitTodo = async event => {
    event.preventDefault();
    try {
      await Axios.post('/todos', { text: todo, description });
    } catch (errors) {
      setErrorText(errors.response.data.text);
      setErrorDescription(errors.response.data.description);
      //   setError(error);
    }
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
        {errorText && <Form.Text>{errorText}</Form.Text>}
        <Form.Control
          type="text"
          onChange={evt => {
            setDescription(evt.target.value);
          }}
          value={description}
        />
        {errorDescription && <Form.Text>{errorDescription}</Form.Text>}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddTodo;
