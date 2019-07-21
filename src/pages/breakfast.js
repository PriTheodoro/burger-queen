import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import menu from '../components/menuBreakfast';

class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toBuy: []
    }
  }
  listToBuy = (product) => {
    const produtcIndex = this.state.toBuy.findIndex((itemMenu) => {
      return itemMenu.name === product.name;
    });

    if (produtcIndex < 0) {
      const newProduct = {
        ...product,
        quantity: 1
      };
      this.setState({
        toBuy: this.state.toBuy.concat(newProduct)
      });
    } else {
      let newtoBuy = this.state.toBuy;
      newtoBuy[produtcIndex].quantity += 1;
      this.setState({
        toBuy: newtoBuy
      });

    }
  }



  render() {

    const totalBill = this.state.toBuy.reduce((acc, cur) => {
      return acc + (cur.quantity * cur.price)
    }, 0);


    return (
      <div className=" " >
        <h1 >SELECIONE O PEDIDO</h1>
        <CardDeck className="justify-content-md-center">
          {menu.map((product, i) => {
            return (
              <div>
                <Card className="card" >
                  <Card.Img src={product.picture} alt="imagem do produto"></Card.Img>
                  <Card.Body className="">
                    <Card.Text>{product.name}</Card.Text>
                    <Card.Text>R$ {product.price},00</Card.Text>
                    <Button className = "btn" variant="primary" key={i} onClick={() =>
                      this.listToBuy(product)}>+
                    </Button>
                    <Button className = "btn" variant="danger" key={i} onClick={() =>
                      this.listToBuy(product)}>-
                      </Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
          }
        </CardDeck>

        <CardDeck className="justify-content-md-center">
          <Card className="card-order">
            <Card.Body className="d-flex flex-column">
              <Card.Title>PEDIDO</Card.Title>
              <Card.Text></Card.Text>
              Valor total: {totalBill}
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    )
  }
}

export default Breakfast;