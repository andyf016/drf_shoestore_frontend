import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: [{name: "Dummy"}, {name: "stupid"}]
    }
  }
  render(){
      return (
    <div >
      <ul>
      {this.state.pokemon.map(p => (
        <li>{p.name}</li>
      ))}
      </ul>
    </div>
  );
  }

}

export default App;
