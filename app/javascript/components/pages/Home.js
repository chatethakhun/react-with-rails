import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import classNames from 'classnames/bind';

import style from 'stylesheets/components/_general.scss';

const c = classNames.bind(style);

const Home = ({ history }) => {
  const handleClick = evt => {
    history.push('/add-todo');
  };

  return (
    <div className={c('f-container')}>
      <Container>
        <br />
        <Row>
          <Button onClick={handleClick}>Go to add page</Button>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
