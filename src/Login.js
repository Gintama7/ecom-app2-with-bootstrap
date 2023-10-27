import React, { useContext, useRef, useState } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import AuthContext from './store/auth-context';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log('logged in');
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkwrgOwCw2yAZHojiLLRC8c6plwmP7dms',{
        method:'POST',
        body: JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken: true
        }),headers:{
          'Content-Type':'application/json'
        }
      }).then((res) =>{
        if(res.ok){
            return res.json().then((data)=>{
              console.log()
              authCtx.login(data.idToken);
              history.replace('/store');
            })
            
        }else{
          return res.json().then((data)=>{
            const errorMessage = data.error.message;
            alert(errorMessage);
          })
        }
      })
    }

  return (
    <Container className='mt-5 d-flex flex-column justify-content-center align-items-center m-auto'>
        <h1>Login</h1>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <FormControl type="email" placeholder="Enter email" ref={emailRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <FormControl type="password" placeholder="Password"  ref={passwordRef}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Login
