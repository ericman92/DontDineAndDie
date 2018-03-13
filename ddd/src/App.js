import React, {Component} from 'react';
import './App.css';
import ListSingle from './components/ListSingle';
import SearchPage from './components/SearchPage'
import fake from './queries/fake';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'front-page',
      randomItem: ''

    }
  }

  togglePage = e => {
    this.setState({
      currentPage: e.target.name
    }, this.log)
  }

  log = () => console.log(this.state)

  render() {
    const {currentPage} = this.state
    // let rando = Math.floor(Math.random() * 5 + 1)
    let topWorst = fake.getWorst()
    // let desc = fake.getWorst()[rando].violation_description; let complaintNumber
    // = fake.getAll()[rando].count
    return (<SearchPage/>)

  }
}
export default App;