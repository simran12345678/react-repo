import React from "react";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Home from "./container/home/home";
import Dashboard from "./container/dashboard/dashboard";
import MyProfile from "./container/profile/myprofile";
import AddProduct from "./components/Product/AddProduct/addproduct";
import EditProduct from "./components/Product/EditProduct/editproduct";

import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
        <Route exact path="/MyProfile" component={MyProfile}/>
        <Route exact path="/AddProduct" component={AddProduct} />
        <Route
          exact
          path="/editproduct"
          render={(props) => <EditProduct {...props} />}
        />
     
        <Route exact path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
