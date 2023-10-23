
import { useState } from 'react';
import './App.css';
import Cart from './Cart';
import Products from './Products';
import SiteNavbar from './SiteNavbar';
import CartProvider from './store/CartProvider';

function App() {

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
  );
}

export default App;
