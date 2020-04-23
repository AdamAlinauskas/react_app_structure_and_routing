import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
