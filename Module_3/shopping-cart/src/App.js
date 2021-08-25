import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/cart";
import Preview from "./components/preview";
import Home from "./components/home";
import Navbar from "./components/navbar"


let App = () => {
  return (
    <div>
      
      <Router>
        <Navbar />

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
