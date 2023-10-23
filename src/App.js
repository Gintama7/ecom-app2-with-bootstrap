
import { useState } from 'react';
import './App.css';
import Cart from './Cart';
import Products from './Products';
import SiteNavbar from './SiteNavbar';

function App() {

  const [showCart,setShowCart] = useState(false);

    const showHandler=()=>{
        setShowCart(true);
    }

  const  hideHandler=()=>{
     setShowCart(false);
  }

  return (
    <div className="App">
       <SiteNavbar show={showHandler} />
      <Products/>
      <Cart show={showCart} hide={hideHandler}/>
    </div>
  );
}

export default App;
