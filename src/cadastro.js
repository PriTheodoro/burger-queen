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

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      place:["Salão", "Cozinha"],
      password:"",
      listItem: []
    };
  }

handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

handleClick = () => {
    const object = {
      name: this.state.name,
      email:this.state.email,
      place:this.state.place,
      password:this.state.password
    } 
    database.collection('cadastro').add(object)
      this.setState({
        listItem:this.state.listItem.concat(object)
      })
  }

createUser = () => {
  this.props.createUserWithEmailAndPassword(this.state.email, 
    this.state.password);
}


render() {
   return (
    <div className="App">
       <img src={logo} className="App-logo"></img>
      <header className="App-header">
          <h1>FAÇA SEU CADASTRO</h1>
        <Input value={this.state.name}
          placeholder="Nome completo"
          onChange={(e)=> this.handleChange(e,"name")}/>
        <Input value={this.state.email}
          placeholder="Digite seu email"
          onChange={(e)=> this.handleChange(e,"email")}/>
        <select value={this.state.place}
          placeholder="Escolha seu local de trabalho"
          onChange={(e)=> this.handleChange(e,"place")}/>  
        <Input value={this.state.password}
          placeholder="Crie sua senha"handleClick
          onChange={(e)=> this.handleChange(e,"password")}/>  
        
        <Button text="Criar sua conta" onClick={this.handleClick}/>
        

      </header>
      </div>
    );
  }
}

export default withFirebaseAuth({firebaseRegisterAuth})(Register);
