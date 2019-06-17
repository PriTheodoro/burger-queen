import React from 'react';
import '../App.css';
import Button from '../components/button';
import Input from '../components/Input';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';


const database = firebase.firestore();
const firebaseRegisterAuth = firebase.auth();

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      place: "",
      password: "",
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  createUser = () => {
    this.props.createUserWithEmailAndPassword(this.state.email,
      this.state.password)
      .then((resp) => {
        if (resp) {
          database.collection('cadastro').doc(this.props.uid).set
            ({
              name: this.state.name,
              email: this.state.email,
              place: this.state.place,
              password: this.state.password

            })
            .then(() => {
              if (this.state.place === "Salão") {
                this.props.history.push('/choiceMenu')

              } else { this.props.history.push('/kitchen') }
            })
        }
      }
     )}



  render() {
    return (
      <div className="App">
                 
          <h1>FAÇA SEU CADASTRO</h1>
         
          <Input value={this.state.name}
            placeholder="Nome completo"
            onChange={(e) => this.handleChange(e, "name")} />
         
          <Input value={this.state.email}
            placeholder="Digite seu email"
            onChange={(e) => this.handleChange(e, "email")} />
         
          <select value={this.state.place}
            placeholder="Escolha seu local de trabalho"
            onChange={(e) => this.handleChange(e, "place")} />
         
          <Input value={this.state.password}
            placeholder="Crie sua senha" handleClick
            onChange={(e) => this.handleChange(e, "password")} />

          <Button text="Criar sua conta" onClick={this.handleClick} />

      </div>
    );
  }
}

export default withFirebaseAuth({ firebaseRegisterAuth })(Register);
