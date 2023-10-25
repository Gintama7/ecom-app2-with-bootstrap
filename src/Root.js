import React, { useState } from 'react';
import SiteNavbar from './SiteNavbar';
import { Outlet } from 'react-router-dom';
import CartProvider from './store/CartProvider';
import Cart from './Cart';
import { Button, Container } from 'react-bootstrap';
import CartOffCanvas from './CartOffCanvas';

const Root = () => {

    const [showCart,setShowCart] = useState(false);

    const showHandler=()=>{
        setShowCart(true);
    }

  const  hideHandler=()=>{
     setShowCart(false);
  }
  return (
    <CartProvider>
      <SiteNavbar show={showHandler}/>
      <Cart show={showCart} hide={hideHandler}/>
      {/* <CartOffCanvas show={showCart} hide={hideHandler}/> */}
      <Container className='d-flex mt-3 flex-column align-items-center justify-content-center' >
      <h1>The Generics</h1>
     <Button className='mt-3'>Get Our Latest Album</Button>
      </Container>
      <Outlet/>
    </CartProvider>  

  )
}

export default Root
