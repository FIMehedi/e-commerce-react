import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import NotFound from './components/NotFound/NotFound';
import ProductReview from './components/ProductReview/ProductReview';
import Inventory from './components/Inventory/Inventory';
import SignIn from './components/SignIn/SignIn';
import { CartContextProvider } from './components/Shop/Shop';

function App() {
  return (
    <div>
      <CartContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Header></Header>
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <Header></Header>
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/review">
              <Header></Header>
              <ProductReview></ProductReview>
            </Route>
            <Route path="/inventory">
              <Header></Header>
              <Inventory></Inventory>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="*">
              <Header></Header>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
