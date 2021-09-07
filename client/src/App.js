import React from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Home from "./components/Home"
import { Switch, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route component={() => {return(<h1>Page Not Found</h1>)}} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
