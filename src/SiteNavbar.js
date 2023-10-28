import React, { useContext } from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import CartContext from './store/cart-context'
import AuthContext from './store/auth-context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SiteNavbar = (props) => {
  const crtCtx = useContext(CartContext);
 const authCtx = useContext(AuthContext);
  let quantity=0;

  crtCtx.items.forEach((item)=>{
    quantity= quantity + Number(item.quantity);
  })

  const logOutHandler=()=>{
    authCtx.logout();
  }
    
  return (
    <Navbar bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Nav className="me-auto" >
            <Nav.Link href="/store" >Store</Nav.Link>
            <Nav.Link href="/about" >About</Nav.Link>
            <Nav.Link href="/contact" >Contact Us</Nav.Link>
            <Nav.Link href="/login" >Login</Nav.Link>
          </Nav>
          
         {authCtx.isLoggedIn &&<Nav><Button onClick={logOutHandler} style={{marginRight:'5px'}} >Log Out</Button></Nav> } 
         <Nav> <Button onClick={props.show} variant='success' style={{marginRight:'5px'}}>Cart <Badge>{quantity}</Badge></Button></Nav>
      </Container>      
       
      </Navbar>
  )
}

export default SiteNavbar
