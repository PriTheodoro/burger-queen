import React from 'react';
import './App.css';
import logo from './img/logo.png';
import Button from './components/button';
import login from './login';
import cadastro from './cadastro';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo"></img>
        <header className="App-header">
          <h1>BEM VINDO</h1>
          <Link to= "login">ENTRAR</Link> 
          <Button
            text="ENTRAR"
            onClick={<Link to= "login"></Link>} /> 
          <Button
            text="CADASTRAR"
            onClick={<Link to= "cadastro"></Link>} />
          <Route path = "/" exact component={login}/>
          <Route path = "/" exact component={cadastro}/> 
        </header>
      </div>
    </Router>
  );
  }

export default App;
