import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Route,useHistory } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";
import Navbar_ from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Cart from "./components/Cart/Cart";
import ItemLayout from "./components/layout/ItemLayout";
import ViewProduct from "./components/Items/ViewProduct";
import Profile from "./components/layout/Profile"
import { useEffect } from "react";


function Router() {
  const { loggedIn } = useContext(AuthContext);
  const [CartSize, setCartSize] = useState(0);
  const SetCart = (value) => {
    setCartSize(value);
  };
  return (
    <BrowserRouter>
      <Switch>
        
        {loggedIn === false? (
          <>
            <Navbar_ badgeValue={CartSize} />
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Cart">
              <Cart functionToSetCartSize={SetCart} />
            </Route>
            <Route exact path="/">
              <ItemLayout functionToSetCartSize={SetCart} />
            </Route>
            <Route path="/ViewProduct/:product">
              <ViewProduct />
            </Route>
          </>
        ): <>
        <Navbar_ badgeValue={CartSize} />
        <Route path="/customer">
          <Customers />
        </Route>
        <Route path="/Cart">
          <Cart functionToSetCartSize={SetCart} />
        </Route>
        <Route exact path="/">
          <ItemLayout functionToSetCartSize={SetCart} />
        </Route>
        <Route path="/ViewProduct/:product">
          <ViewProduct />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </>}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
