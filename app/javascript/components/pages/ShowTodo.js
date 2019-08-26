import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

import style from 'stylesheets/application.scss';
import { getTodo } from '../../redux/reducers/todo-reducer/action';

const c = classNames.bind(style);

const ShowTodo = ({ getTodo, match, todo }) => {
  useEffect(() => {
    getTodo(match.params.id);
  }, []);
  return (
    todo && (
      <div className={c('f-container', 'center')}>
        <Card style={{ width: '18rem' }} className={c('mx-auto')}>
          <Card.Body>
            <Card.Title>{todo.text}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

const ShowTodoWithReducer = connect(
  state => ({ todo: state.todo.todo }),
  { getTodo }
)(ShowTodo);
export default ShowTodoWithReducer;
