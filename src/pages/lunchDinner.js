import React from 'react';
import '../App.css';
import Button from '../components/button';



class LunchDinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  goEnter = () => {
    this.props.history.push('./login')
  }

  render() {

    return (
      <div className="App">
        <div className="App-header" >
          <h1>ESCOLHA UM MENU</h1>
          <Button
            text="CAFÉ DA MANHÃ"
            onClick={this.goBreakfast} />
          <Button
            text="ALMOÇO - JANTAR"
            onClick={this.goLunchDinner} />
        </div>
      </div>
    );
  }
}

export default LunchDinner;