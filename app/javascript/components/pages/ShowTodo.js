import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { connect, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

import style from 'stylesheets/application.scss';
import { getTodo } from '../../redux/reducers/todo-reducer/action';

const c = classNames.bind(style);

const ShowTodo = ({ getTodo, match }) => {
  useEffect(() => {
    getTodo(match.params.id);
  }, []);

  const text = useSelector(state => state.todo.text);
  const description = useSelector(state => state.todo.description);
  return (
    <div className={c('f-container', 'center')}>
      <Card style={{ width: '18rem' }} className={c('mx-auto p')}>
        <Card.Body>
          <Card.Title>{text}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const ShowTodoWithReducer = connect(
  null,
  { getTodo }
)(ShowTodo);
export default ShowTodoWithReducer;
