import React from 'react';
import './App.css';
import logo from './img/logo.png';
import Button from './components/button';
import firebase from './firebaseConfig';

const database = firebase.firestore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome:"",
      email:"",
      local:"",
      senha:"",
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  handleClick = () => {
    const modal = alert("sou um modal")
  }

  

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo"></img>
        <header className="App-header">
          <h1>BEM VINDO</h1>
          <Button
            text="ENTRAR"
            onClick={() => console.log("entrou")} />
          <Button
            text="CADASTRAR"
            onClick={() => modal} />

        </header>
      </div>
    );
  }
}

export default App;
