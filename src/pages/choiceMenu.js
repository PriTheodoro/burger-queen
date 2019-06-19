import React from 'react';
import '../App.css';
import Button from '../components/button';



class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  goBreakfast = () => {
    this.props.history.push('./Breakfast')
  }

  goLunchDinner = () => {
    this.props.history.push('./lunchDinner')
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
export default Menu;

