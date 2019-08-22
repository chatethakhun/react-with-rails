import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = ({ history }) => {
  const handleClick = evt => {
    history.push('/add-todo');
  };

  const [count, setCount] = useState(0);

  return (
    <Container>
      <Row />
      <Row>
        <Button onClick={handleClick}>Go to add page {count}</Button>
      </Row>
    </Container>
  );
};

export default Home;
