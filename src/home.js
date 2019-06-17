import React from 'react';
import './App.css';
import logo from './img/logo.png';
import Button from './components/button';
import firebase from './firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

const database = firebase.firestore();
const firebaseAppAuth = firebase.auth();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      place:"",
      password:"",
      listItem: []
    };
  }

  componentDidMount(){
    database.collection('cadastro').get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({listItem: data})
      });
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

signIn = () => {
  this.props.signInWithEmailAndPassword(this.state.email, 
    this.state.password)
    .then(()=> {
      alert("entrou");
    });
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
            onClick={() => console.log("cadastre")} />
        <input value={this.state.name}
          placeholder="Nome completo"
          onChange={(e)=> this.handleChange(e,"name")}/>
        <input value={this.state.email}
          placeholder="Digite seu email"
          onChange={(e)=> this.handleChange(e,"email")}/>
        <input value={this.state.place}
          placeholder="Escolha seu local de trabalho"
          onChange={(e)=> this.handleChange(e,"place")}/>  
        <input value={this.state.password}
          placeholder="Crie sua senha"handleClick
          onChange={(e)=> this.handleChange(e,"password")}/>  
        
        <Button text="Criar sua conta" onClick={this.createUser}/>
        {
          this.state.listItem.map((item,i) => {
            return <p key={i}> {item.name} | {item.email}</p>
          })
         }
        <hr></hr>
        <hr></hr>
        <input value={this.state.email}
          placeholder="Digite seu email"
          onChange={(e)=> this.handleChange(e,"email")}/>
        <input value={this.state.password}
          placeholder="Digite sua senha"handleClick
          onChange={(e)=> this.handleChange(e,"password")}/> 

        <Button text="Iniciar" onClick={this.signIn}/>

      </header>
      </div>
    );
  }
}

export default withFirebaseAuth({firebaseAppAuth})(App);
