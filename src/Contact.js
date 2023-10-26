import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    const nameChangeHandler=(e)=>{
        setName(e.target.value);
    }
    const emailChangeHandler=(e)=>{
        setEmail(e.target.value);
    }
    const phoneChangeHandler=(e)=>{
        setPhone(e.target.value);
    }


    const formHandler=async(e)=>{
        e.preventDefault();
        const obj={name:name,phone:phone,email:email};
        const response = await fetch('https://band-ecom-site-default-rtdb.firebaseio.com/users.json',{
             method:'POST',
             body: JSON.stringify(obj),
             header:{
                ' Content-Type':'application/json'
             }
         })
         const data= await response.json();
         console.log('user info stored successfully');
    }

    
    
  return (
    <Container>

        <h1>Contact Us</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={nameChangeHandler} value={name} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={emailChangeHandler} value={email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" onChange={phoneChangeHandler} value={phone} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={formHandler}>
        Submit
      </Button>
        </Form>
    </Container>
  )
}

export default Contact
