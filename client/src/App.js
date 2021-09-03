import React from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route exact path="/movies" component={Movies} />

        </Switch>
      </div>
    </>
  );
}

export default App;
