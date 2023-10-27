import React, { Fragment, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import SiteNavbar from './SiteNavbar';
import Cart from './Cart';

const Layout = (props) => {

    const [showCart,setShowCart] = useState(false);

    const showHandler=()=>{
        setShowCart(true);
    }

  const  hideHandler=()=>{
     setShowCart(false);
  }
  return (
    <Fragment>
    <SiteNavbar show={showHandler}/>
      <Cart show={showCart} hide={hideHandler}/>
      {/* <CartOffCanvas show={showCart} hide={hideHandler}/> */}
      <Container className='d-flex mt-3 flex-column align-items-center justify-content-center' >
      <h1>The Generics</h1>
     <Button className='mt-3'>Get Our Latest Album</Button>
      </Container>
      <main>{props.children}</main>
      </Fragment>
  )
}

export default Layout
