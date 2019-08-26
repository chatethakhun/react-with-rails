import React, { useEffect, useState } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { deleteTodo, getTodos } from '../../redux/reducers/todo-reducer/action';

import style from 'stylesheets/application.scss';

const c = classNames.bind(style);

const Home = ({ history, deleteTodo, getTodos, todos }) => {
  const [showModal, setModal] = useState(false);
  const [todoSelected, setTodoSelected] = useState(null);

  const handleClick = () => {
    history.push('/todo');
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleDelete = id => {
    if (id) deleteTodo(id);
    setModal(false);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className={c('f-container')}>
      <br />
      <div className={c('mx-auto', 's-container')}>
        <div className={c('center')}>
          <img src={require('images/todo-list.png')} />
        </div>
        <div className={c('d-flex-column', 'd-flex-center ')}>
          <Button onClick={handleClick}>+ Add Todo</Button>
        </div>
      </div>
      <br />
      <div className={c('m-container', 'mx-auto')}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Text</th>
              <th>Description</th>
              <th className={c('pull-right')}>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos &&
              todos.length > 0 &&
              todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>{todo.text}</td>
                  <td>{todo.description}</td>
                  <td className={c('pull-right')}>
                    <a
                      onClick={() => {
                        setTodoSelected(todo.id);
                        setModal(true);
                      }}
                      className={c('link', 'trash')}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <a
                      onClick={() => history.push(`/todo/${todo.id}`)}
                      className={c('link', 'eye')}
                    >
                      <i className="fas fa-eye" />
                    </a>
                    <a
                      onClick={() => history.push(`/todo/edit/${todo.id}`)}
                      className={c('link', 'edit')}
                    >
                      <i className="fas fa-edit" />
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm your action!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to remove this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDelete(todoSelected)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const HomeWithReducer = connect(
  state => ({
    todos: state.todo.todos
  }),
  { deleteTodo, getTodos }
)(Home);

export default HomeWithReducer;
