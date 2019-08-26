import React, { useState, useEffect } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import style from 'stylesheets/application.scss';
import {
  addTodo,
  resetErrorMessage
} from '../../redux/reducers/todo-reducer/action';

const c = classNames.bind(style);

const AddTodo = ({
  errorText,
  errorDescription,
  addTodo,
  resetErrorMessage
}) => {
  const submitTodo = async event => {
    event.preventDefault();
    addTodo(todo, textDescription);
  };

  useEffect(() => {
    resetErrorMessage();
  }, []);

  return (
    <div className={c('f-container')}>
      <div className={c('s-container', 'mx-auto', 'center')}>
        <Form onSubmit={submitTodo}>
          <h1>Todo</h1>
          <Form.Group>
            <Row>
              <Form.Control
                type="text"
                onChange={evt => {
                  setTodo(evt.target.value);
                }}
                value={todo}
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
                onChange={evt => {
                  setDescription(evt.target.value);
                }}
                value={textDescription}
                placeholder="Description"
              />
              {errorDescription && (
                <Form.Text className="text-error">{errorDescription}</Form.Text>
              )}
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

const AddTodoWithReducer = connect(
  state => ({
    errorText: state.todo.errorText,
    errorDescription: state.todo.errorDescription
  }),
  { addTodo, resetErrorMessage }
)(AddTodo);

export default AddTodoWithReducer;
