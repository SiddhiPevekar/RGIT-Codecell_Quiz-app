import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import "./components/css/style.css"
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        {/* <Home /> */}
        <Route exact path="/" component={Home} />

        {/* any other page other than mentioned ones directly send to home page without error */}
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
