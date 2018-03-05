import React, {Component} from 'react';
import './App.css';
import ListSingle from './components/ListSingle';
import SearchPage from './components/SearchPage'
import getBy from './queries/queries'
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
    let rando = Math.floor(Math.random() * 5 + 1)
    let topWorst = fake.getWorst()
    let desc = fake.getWorst()[rando].violation_description;
    let complaintNumber = fake.getAll()[rando].count
    return (
      <div>
        {currentPage === 'front-page'
          ? <div className="wsie-container">
              {/* <input type='text' placeholder="Enter Restaurant Name" /> */}
              <h1 className='header'>Don't Dine & Die</h1>
              <div className='random-restaurant'>
                <ListSingle
                  complaintNumber={topWorst[12].count}
                  restaurantName={topWorst[12].dba}
                  complaintDescription={`Facility not vermin proof. Harborage or conditions conducive to attracting vermin to the premises and/or allowing vermin to exist`}/>
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