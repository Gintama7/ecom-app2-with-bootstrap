import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const SiteNavbar = (props) => {
    
  return (
    <Navbar bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{color:'white'}} href='#'>Home</Navbar.Brand>
        <Nav className="me-auto" style={{color:'white'}}>
            <Nav.Link href="#features" >Store</Nav.Link>
            <Nav.Link href="#pricing" >About</Nav.Link>
          </Nav>
      </Container>
      <Container>
        <Button onClick={props.show} variant='success'>Cart</Button>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar
