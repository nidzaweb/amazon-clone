import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from  './component/header/Header';
import Banner from './component/banner/Banner';
import Products from './component/products/Products';
import Footer from './component/footer/Footer';
import Signin from './component/signin/Signin';
import Signup from './component/signup/Signup';
import Basket from './component/basket/Basket';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>

          <Route exact path='/signin'>
            <Signin/>
          </Route>

          <Route exact path='/signup'>
            <Signup/>
          </Route>
          
          <Route exact path='/basket'>
            <Header />
            <Basket/>
          </Route>

          <Route path="/">
            <div className="app">
              <Header/>
              <Banner/>
              <Products/>
              <Footer/>
            </div>
          </Route>

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
