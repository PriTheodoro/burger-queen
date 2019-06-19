import React from 'react';
import '../App.css';
import Button from '../components/button';



class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  goEnter = () => {
    this.props.history.push('./login')
  }

  goRegister = () => {
    this.props.history.push('./cadastro')
  }
  render() {

    return (
      <div className="App">
        <div className="App-header" >
          <h1>BEM VINDO</h1>
          <Button
            text="ENTRAR"
            onClick={this.goEnter} />
          <Button
            text="CADASTRAR"
            onClick={this.goRegister} />
        </div>
      </div>
    );
  }
}
export default home;


