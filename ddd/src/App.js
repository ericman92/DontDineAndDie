import React, {Component} from 'react';
import './App.css';
import ListSingle from './components/ListSingle';
import SearchPage from './components/SearchPage'

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
    return (
      <div>
        {currentPage === 'front-page'
          ? <div className="wsie-container">
              <h1 className='header'>Don't Dine and Die</h1>
              <ListSingle
                complaintNumber='14'
                restaurantName='1 STOP PATTY SHOP'
                restaurantCuisine='Bakery'
                restaurantBorough='Manhattan'
                restaurantZipCode='10031'/>
              <button name='search-page' className='front-page-button' onClick={this.togglePage} >See More Restaurants</button>
            </div>
          : <SearchPage togglePage={this.togglePage}/>
      } 
      </div>

  )

}
}
export default App;