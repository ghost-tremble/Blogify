import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import Login from "./components/UserAuth-components/login-component/Login";
import SignUp from "./components/UserAuth-components/signUp/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
