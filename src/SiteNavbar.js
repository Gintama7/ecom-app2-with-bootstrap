import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const SiteNavbar = () => {
  return (
    <Navbar bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{color:'white'}} href='#'>Home</Navbar.Brand>
        <Nav className="me-auto" style={{color:'white'}}>
            <Nav.Link href="#features" >Store</Nav.Link>
            <Nav.Link href="#pricing" >About</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar
