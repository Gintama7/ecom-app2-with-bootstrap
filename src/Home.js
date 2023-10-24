import React, { useState } from 'react'
import CartProvider from './store/CartProvider'
import SiteNavbar from './SiteNavbar'
import Products from './Products'
import Cart from './Cart'

const Home = () => {

    const [showCart,setShowCart] = useState(false);

    const showHandler=()=>{
        setShowCart(true);
    }

  const  hideHandler=()=>{
     setShowCart(false);
  }
  return (
    <CartProvider>      
    <SiteNavbar show={showHandler} />
   <Products/>
   <Cart show={showCart} hide={hideHandler}/>
 </CartProvider>
  )
}

export default Home
