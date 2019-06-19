import React from 'react';
import './App.css';
import Logo from './img/logo.png';
import Home from './pages/home';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import ChoiceMenu from './pages/choiceMenu';
import Breakfast from './pages/Breakfast';
import LunchDinner from './pages/lunchDinner';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <img src={Logo} className="App-logo"></img>
        <header className="App-header">
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/cadastro" exact component={Cadastro} />
          <Route path="/choiceMenu" exact component={ChoiceMenu} />
          <Route path="/Breakfast" exact component={Breakfast} />
          <Route path="/lunchDinner" exact component={LunchDinner} />
        </header>
      </div>
    </Router>
  )
}

export default App;
