import React, { useContext } from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import CartContext from './store/cart-context'

const SiteNavbar = (props) => {
  const crtCtx = useContext(CartContext);

  let quantity=0;

  crtCtx.items.forEach((item)=>{
    quantity= quantity + Number(item.quantity);
  })
    
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
        <Button onClick={props.show} variant='success'>Cart <Badge>{quantity}</Badge></Button>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar
