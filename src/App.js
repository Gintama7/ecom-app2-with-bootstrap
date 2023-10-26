import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';
// import Cart from './Cart';
// import Products from './Products';
// import SiteNavbar from './SiteNavbar';
// import CartProvider from './store/CartProvider';
import About from './About';
import Home from './Home';
import Root from './Root';
import Products from './Products';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      { path:'/',element:<Home/> },
      {path:'/about',element:<About/>},
      {path:'/store',element:<Products/>},
      {path:'/contact',element:<Contact/>}
    ]
  }
  
])

function App() {

  return (
    <RouterProvider router={router}/>
   
  );
}

export default App;
