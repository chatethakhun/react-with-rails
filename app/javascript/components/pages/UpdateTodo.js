import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { Form, Button, Row } from 'react-bootstrap';

import style from 'stylesheets/application.scss';
import { getTodo } from '../../redux/reducers/todo-reducer/action';

const c = classNames.bind(style);

const UpdateTodo = ({ getTodo, todo, errorText, errorDescription, match }) => {
  // const [textTodo, setTodo] = useState([]);
  // const [textDescription, setDescription] = useState('');
  useEffect(() => {
    getTodo(match.params.id);
  }, []);

  const submitTodo = () => {};
  return (
    todo && (
      <div className={c('f-container')}>
        <div className={c('s-container', 'mx-auto', 'center')}>
          <Form onSubmit={submitTodo}>
            <h1>Todo</h1>
            <Form.Group>
              <Row>
                <Form.Control
                  type="text"
                  value={todo.text}
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
                  value={todo.description}
                  placeholder="Description"
                />
                {errorDescription && (
                  <Form.Text className="text-error">
                    {errorDescription}
                  </Form.Text>
                )}
              </Row>
            </Form.Group>
            <Button variant="primary" type="submit" size="lg">
              Update
            </Button>
          </Form>
        </div>
      </div>
    )
  );
};

const UpdateTodoWithReducer = connect(
  state => ({
    todo: state.todo.todo,
    errorText: state.todo.errorText,
    errorDescription: state.todo.errorDescription
  }),
  { getTodo }
)(UpdateTodo);

export default UpdateTodoWithReducer;
