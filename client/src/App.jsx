import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Box } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <Header />
      <Box style={{ marginTop: 55 }}>
        <Switch>
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Box>
    </div>
  );
}

export default App;
