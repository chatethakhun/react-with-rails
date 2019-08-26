import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';
import { Button, Table } from 'react-bootstrap';
import classNames from 'classnames/bind';

import style from 'stylesheets/application.scss';

const c = classNames.bind(style);

const Home = ({ history }) => {
  const handleClick = () => {
    history.push('/todo');
  };

  const [{ data, loading, error }, refetch] = useAxios('/todos.json');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.text}</td>
                <td>{todo.description}</td>
                <td>
                  <i className="fas fa-trash" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
