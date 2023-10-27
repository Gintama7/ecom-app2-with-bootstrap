
import './App.css';
import About from './About';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import { Route,Switch} from 'react-router-dom';
import Layout from './Layout';
import ProductDetails from './ProductDetails';


function App() {

    
  return (
    <Layout>      
      <Switch>
        <Route path='/' exact>
      <Home/>
        </Route>
        <Route path='/about'>
          <About/>
          </Route>
          <Route path='/store'>
          <Products/>
          </Route>
          <Route path='/contact'>
          <Contact/>
          </Route>
          <Route path='/store/:id'>
          <ProductDetails/>
          </Route>
      </Switch>
    </Layout>  

  )
   

}

export default App;
