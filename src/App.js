
import './App.css';
import About from './About';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import { Route,Switch} from 'react-router-dom';
import Layout from './Layout';
import ProductDetails from './ProductDetails';
import Login from './Login';
import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';
import CartContext from './store/cart-context';
import axios from 'axios';


function App() {
const authCtx = useContext(AuthContext);
const cartCtx = useContext(CartContext);
   
useEffect(()=>{
 if(authCtx.isLoggedIn) {
  const newMail = localStorage.getItem('email');
  console.log(newMail);
  axios.get(`https://crudcrud.com/api/34afb79414254181a3945ebceddda921/cart${newMail}`)
  .then((res)=>{
    cartCtx.incrementItem(res.data);
    console.log(res.data);
  })}
},[authCtx.isLoggedIn])

    
  return (
    <Layout>      
      <Switch>
        <Route path='/' exact>
      <Home/>
        </Route>
        <Route path='/about'>
          <About/>
          </Route>
          <Route path='/contact'>
          <Contact/>
          </Route>
          <Route path='/login'>
          <Login/>
          </Route>
          <Route path='/store' exact>
          {authCtx.isLoggedIn && <Products/>}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
          </Route>    
           <Route path='/store/:id'>         
          {authCtx.isLoggedIn &&  <ProductDetails/>}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}         
          </Route>                 
          <Route path='*'>
          <Redirect to='/login'/>
          </Route>
      </Switch>
    </Layout>  

  )
   

}

export default App;
