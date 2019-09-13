import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Form, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import queryString from 'query-string'

import style from 'stylesheets/application.scss';
import { login } from '../../redux/reducers/user-reducer.js/action';
import {handleMessage} from "../../redux/reducers/flash-message-reducer/action";

const c = classNames.bind(style);

const Login = ({ login, handleMessage }) => {
  const submitLogin = event => {
    event.preventDefault();
    const email = event.currentTarget.elements[0].value;
    const password = event.currentTarget.elements[1].value;
    login(email, password);
  };

  useEffect(() => {
    let params = queryString.parse(window.location.search)
    if(params.message) {
      handleMessage(params.message)
    }
  },[])

  return (
    <div className={c('f-container', 'center')}>
      <Form onSubmit={submitLogin}>
        <h1>Login</h1>
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
  { login, handleMessage }
)(Login);
