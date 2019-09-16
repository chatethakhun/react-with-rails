import React from 'react';
import classNames from 'classnames/bind';
import { Form, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import style from 'stylesheets/application.scss';
import { register } from '../../redux/reducers/user-reducer.js/action';

const c = classNames.bind(style);

const Register = ({ register }) => {
  const submitLogin = event => {
    event.preventDefault();
    const email = event.currentTarget.elements[0].value;
    const password = event.currentTarget.elements[1].value;
    register(email, password);
  };

  return (
    <div className={c('f-container', 'center')}>
      <Form onSubmit={submitLogin}>
        <h1>Register</h1>
        <br />
        <div className={c('s-container', 'mx-auto', 'center')}>
          <Form.Group>
            <Col>
              <Form.Control type="text" placeholder="Email" />
              <br />
              <Form.Control type="password" placeholder="Password" />
              <br />
              <Button variant="primary" type="submit" size="lg">
                Submit
              </Button>
            </Col>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default connect(
  null,
  { register }
)(Register);
