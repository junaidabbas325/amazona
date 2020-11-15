import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Gig from './pages/gig'
import SingalGig from './pages/SingalGig'

import NavBar from './Components/NavBar'
// Funcction start from here
function App() {


  // Main Component Star from here
  return (
    <>
  <NavBar />
  <Switch>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/join">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/explore">
            <Gig />
            </Route>
          <Route exact path="/products/:id" component={SingalGig} />
        </Switch>
</>
  );
}



export default App;
