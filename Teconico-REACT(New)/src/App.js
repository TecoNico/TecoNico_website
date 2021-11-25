import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from '../src/components/Navbar'
import Home from '../src/screens/Home/Home'
import Footer from './components/Footer';
import Product from './screens/OurProducts/OurProducts';
import JoinUs from './screens/JoinUs/JoinUs';
import Family from './screens/Family/Family';
import Blog from './screens/Blog/Blog';
function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/ourproduct'>
            <Product />
          </Route>
          <Route path='/joinus'>
            <JoinUs />
          </Route>
          <Route path='/family'>
            <Family />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
