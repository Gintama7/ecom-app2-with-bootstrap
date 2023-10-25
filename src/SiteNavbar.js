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
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Nav className="me-auto" >
            <Nav.Link href="/store" >Store</Nav.Link>
            <Nav.Link href="/about" >About</Nav.Link>
          </Nav>
          <Nav> <Button onClick={props.show} variant='success' style={{marginRight:'5px'}}>Cart <Badge>{quantity}</Badge></Button></Nav>
      </Container>      
       
      </Navbar>
  )
}

export default SiteNavbar
