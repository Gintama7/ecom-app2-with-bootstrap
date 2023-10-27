
import './App.css';
import About from './About';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import { Route,Switch} from 'react-router-dom';
import Layout from './Layout';
import ProductDetails from './ProductDetails';
import Login from './Login';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';


function App() {
const authCtx = useContext(AuthContext);
    
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
