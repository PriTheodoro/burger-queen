import React from 'react';
import '../App.css';
import Button from '../components/button';
import Input from '../components/Input';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';

const database = firebase.firestore();
const firebaseAppAuth = firebase.auth();

class Login extends React.Component {
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

  signIn = () => {
    this.props.signInWithEmailAndPassword(this.state.email,
      this.state.password)
      .then((resp) => {
        const idUser = resp.user.uid;
        if (resp) {
          database.collection('cadastro').doc(idUser).get()
            .then((resp) => {
              resp.data()
              .then(data => {
              if(data.place === "Salão"){ 
                this.props.history.push('/choiceMenu') 
              }else if (data.place === "Cozinha") {
                this.props.history.push('/kitchen')
              }
            }).catch((err) => alert(err));
          });
        }  else {
          alert("Usuário não cadastrado!")
        }
    
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" >
          <h1>FAÇA SEU LOGIN PARA COMEÇAR</h1>
          <Input value={this.state.email}
            type="email" placeholder="Digite seu email"
            onChange={(e) => this.handleChange(e, "email")} />

          <Input value={this.state.password}
            type="password" placeholder="Digite sua senha"
            onChange={(e) => this.handleChange(e, "password")} />

          <Button text="INICIAR" onClick={this.signIn} />
        </div>
      </div>
    );
  }
}

export default withFirebaseAuth({ firebaseAppAuth })(Login);