import React, { useState } from 'react';
import SiteNavbar from './SiteNavbar';
import { Outlet } from 'react-router-dom';
import CartProvider from './store/CartProvider';
import Cart from './Cart';
import { Button, Container } from 'react-bootstrap';
import CartOffCanvas from './CartOffCanvas';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';

const Root = () => {

    const [showCart,setShowCart] = useState(false);

    const showHandler=()=>{
        setShowCart(true);
    }

  const  hideHandler=()=>{
     setShowCart(false);
  }
  return (
    <Container>
      <SiteNavbar show={showHandler}/>
      <Cart show={showCart} hide={hideHandler}/>
      {/* <CartOffCanvas show={showCart} hide={hideHandler}/> */}
      <Container className='d-flex mt-3 flex-column align-items-center justify-content-center' >
      <h1>The Generics</h1>
     <Button className='mt-3'>Get Our Latest Album</Button>
      </Container>
      <Switch>
        <Route path='/'>
      <Home/>
        </Route>
        <Route path='/about'>
          <About/>
          </Route>
          <Route path='/store'>
          <Products/>
          </Route>
          <Route path='contact'>
          <Contact/>
          </Route>
      </Switch>
    </Container>  

  )
}

export default Root
