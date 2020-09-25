import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoe: [],
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/shoe/')
    .then(res => res.json())
    .then(data => this.setState({shoe: data}))
  }

  render(){
      return (
    <div >
      <h1>Shoes</h1>
      <ul>
      {this.state.shoe.map(p => (
        <div>
        <li>Brand Name:{p.brand_name}</li>
        <li>Manufacturer:{p.manufacturer}</li>
        <li>Color: {p.color}</li>
        <li>Material: {p.material}</li>
        <li>Shoe Type: {p.shoe_type}</li>
        <li>Fasten Type: {p.fasten_type}</li>
        <br></br>
        </div>
      ))}
      </ul>
    </div>
  );
  }

}

export default App;
