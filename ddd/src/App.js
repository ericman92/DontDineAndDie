import React, {Component} from 'react';
import './App.css';
import getBy from './queries/queries'
import getSix from './queries/fake';

class App extends Component {
  render() {
    let rando = Math.floor(Math.random() * 5+1)
    let name = getSix.getAll()[rando].dba;
    let desc = getSix.getAll()[rando].violation_description;

    return (
      <div className="wsie-container">
        <h1 className='header'>Don't Dine and Die</h1>
        <div className='random-restaurant'>Random Restaurant</div>
        <div className='random-violation'>Rats! Rats! Rats! Rats!</div>
        <div className='front-page-buttons'>
          <h3>{name}</h3>
          <h4>{desc}</h4>
          <button className='button-another'>Give Me Another</button>
          <button>Near Me</button>
        </div>
      </div>
    );
  }
}
export default App;