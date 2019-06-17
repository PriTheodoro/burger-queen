import React from 'react';
import './App.css';
import logo from './img/logo.png';
import home from './pages/home';
import login from './pages/login';
import cadastro from './pages/cadastro';
import choiceMenu from './pages/choiceMenu';
import Breakfast from './pages/Breakfast';
import lunchDinner from './pages/lunchDinner';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo"></img>
        <header className="App-header">
          <Route path = "/" exact component={home}/>
          <Route path = "/login" exact component={login}/>
          <Route path = "/cadastro" exact component={cadastro}/> 
          <Route path = "/choiceMenu" exact component={choiceMenu}/>
          <Route path = "/Breakfast" exact component={Breakfast}/>
          <Route path = "/lunchDinner" exact component={lunchDinner}/>
        </header>
      </div>
    </Router>
  )} 

export default App;
