import React from 'react';
import './App.css';
import logo from './img/logo.png';
import Button from './components/button';
import Input from './components/Input';
import firebase from './firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
// import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

const database = firebase.firestore();
const firebaseAppAuth = firebase.auth();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      place: "",
      password: "",
      listItem: []
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  signIn = () => {
    this.props.signInWithEmailAndPassword(this.state.email,
      this.state.password)
      .then(() => {
        const idUser = Response.user.uid;
        if (Response) {
          database.collection('cadastro').doc(idUser)
          this.setState({
            email: this.state.email,
            name: this.state.name,
            place: this.state.place
          })
            .catch(() => {
              alert("Usuário não cadastrado!");
            })
        }
      });
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo"></img>
        <header className="App-header">
          <h1>FAÇA SEU LOGIN PARA COMEÇAR</h1>
          <Input value={this.state.email}
           type="email" placeholder="Digite seu email"
            onChange={(e) => this.handleChange(e, "email")} />
          <Input value={this.state.password}
            type="password" placeholder="Digite sua senha"
            onChange={(e) => this.handleChange(e, "password")} />
          <Button text="INICIAR" onClick={this.signIn} />
        </header>
      </div>
    );
  }
}

export default withFirebaseAuth({ firebaseAppAuth })(App);