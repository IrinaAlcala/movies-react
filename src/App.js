import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import "./css/style.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Actors from "./components/actors";
import Films from "./components/films";
import Actresses from "./components/actresses";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Oscars 2019" />
     
          <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
          <Route path="/actors" component={() => <Actors title="Actors" />} />
          <Route path="/actresses" component={() => <Actresses title="Actresses" />} />
          <Route path="/films" component={() => <Films title="Films" />} />
    
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
