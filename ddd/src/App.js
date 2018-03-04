import React, {Component} from 'react';
import './App.css';
import ListSingle from './components/ListSingle';
import SearchPage from './components/SearchPage'
import getBy from './queries/queries'
import getSix from './queries/fake';

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
    let rando = Math.floor(Math.random() * 5 + 1)
    let name = getSix.getAll()[rando].dba;
    let desc = getSix.getAll()[rando].violation_description;
    let complaintNumber = getSix.getAll()[rando].count
    return (
      <div>
        {currentPage === 'front-page'
          ? <div className="wsie-container">
              {/* <input type='text' placeholder="Enter Restaurant Name" /> */}
              <h1 className='header'>Don't Dine and Die</h1>
              <div className='random-restaurant'>
                <ListSingle
                  complaintNumber={complaintNumber}
                  restaurantName={name}
                  complaintDescription={desc}/>
              </div>
              <button
                name='search-page'
                className='front-page-button'
                onClick={this.togglePage}>See More Restaurants</button>
            </div>
          : <SearchPage togglePage={this.togglePage}/>
      } </div>

    )

  }
}
export default App;