import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
// import Directional from './roter/Directional';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import './components/css/style.css';
import HeaderContainer from './containers/HeaderContainer';
import  Directional  from './roter/Directional';


class App extends Component {

  render() {

    return (
      <div>
        <Router>
          <HeaderContainer />
          <Directional />

          

          <Footer />
        </Router>

      </div>

    );
  }
  
}
export default App;
