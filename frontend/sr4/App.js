import React from 'react';
import {Link } from 'react-router-dom'
import './App.css'; 
import HomeScreen from './screens/HomeScreen';
import {Route, Switch} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
const App = () => {
    return(
      
      <>  
      <div className="mainContainer">
        <div class="box">
         <Link to="/" ><h1 class="logo">Junaid</h1></Link>
         <h1 class="menu">
            <ul>
                <Link><li>Cart</li></Link>
                <Link><li>LOGIN</li></Link>
            </ul>
         </h1>
        </div>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
        </Switch>
      </div>
      </>
    )
}
export default App;