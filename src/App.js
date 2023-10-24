import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';
// import Cart from './Cart';
// import Products from './Products';
// import SiteNavbar from './SiteNavbar';
// import CartProvider from './store/CartProvider';
import About from './About';
import Home from './Home';

const router = createBrowserRouter([
  { path:'/',element:<Home/> },
  {path:'/about',element:<About/>}
])

function App() {

  return (
    <RouterProvider router={router}/>
   
  );
}

export default App;
