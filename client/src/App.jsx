import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
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
