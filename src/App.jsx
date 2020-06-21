import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/header/navbar";
import LandingPage from "./container/landingpage";
import CartPage from "./container/cartpage";
import ProductPage from "./container/productpage";
import Footer from "./components/footer";

const App = () => {
  useEffect(() => {
    const e = document.getElementById("starting");

    window.onload = () => {
      if (e) {
        e.remove();
      }
    };
  });
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/product" component={ProductPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
