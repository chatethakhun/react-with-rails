import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { connect, useSelector } from 'react-redux';
import { Form, Button, Row } from 'react-bootstrap';

import style from 'stylesheets/application.scss';
import { getTodo, updateTodo } from '../../redux/reducers/todo-reducer/action';

const c = classNames.bind(style);

const UpdateTodo = ({ getTodo, match, updateTodo }) => {
  const [textTodo, setTodo] = useState('');
  const [textDescription, setDescription] = useState('');
  const { errorDescription, errorText, text, description } = useSelector(
    ({ todo }) => todo
  );

  useEffect(() => {
    getTodo(match.params.id);
  }, []);

  const submitTodo = event => {
    event.preventDefault();
    const newText = event.currentTarget.elements[0].value;
    const newDescription = event.currentTarget.elements[1].value;
    const data = {
      id: match.params.id,
      text: newText,
      description: newDescription
    };
    updateTodo(data);
  };
  return (
    <div className={c('f-container')}>
      <div className={c('s-container', 'mx-auto', 'center')}>
        <Form onSubmit={submitTodo}>
          <h1>Todo</h1>
          <Form.Group>
            <Row>
              <Form.Control
                type="text"
                defaultValue={text}
                placeholder="Todo"
              />
              {errorText && (
                <Form.Text className="text-error">{errorText}</Form.Text>
              )}
            </Row>
            <br />
            <Row>
              <Form.Control
                type="text"
                defaultValue={description}
                placeholder="Description"
              />
              {errorDescription && (
                <Form.Text className="text-error">{errorDescription}</Form.Text>
              )}
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit" size="lg">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

const UpdateTodoWithReducer = connect(
  null,
  { getTodo, updateTodo }
)(UpdateTodo);

export default UpdateTodoWithReducer;
