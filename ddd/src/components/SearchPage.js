import React, { Component } from 'react';
import './SearchPage.css';
import queries from '../queries/queries';

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            zipcode: 0,
            cuisine: '',
            borough: '',
            complaintNumber: false
        }
    }

    inputHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        }, this.log)
    }

    complaintHandler = () => {
        const {complaintNumber} = this.state
        this.setState({
            complaintNumber: !complaintNumber
        }, this.log)
    }

    log = () => console.log(this.state)

    render() {
        const {togglePage} = this.props
        const {complaintNumber} = this.state
        return (
            <div className='search-page'>
                <button name='front-page' onClick={togglePage} >Home</button>
                <h1 className='search-page-header'>Don't Dine and Die</h1>
                <div className='search-page-filters'>
                    { complaintNumber 
                        ? <p className='search-page-filters-complaint-number' onClick={this.complaintHandler} ># Of Complaints</p>
                        : <p className='search-page-filters-complaint-number' onClick={this.complaintHandler} ># Of Complaints ↑</p>}                    
                    <select className='search-page-filters-boro' placeholder='Borough' name='borough' onChange={this.inputHandler} >
                        <option className='search-page-filters-boro-options' value="bronx">Bronx</option>
                        <option className='search-page-filters-boro-options' value="manhattan">Manhattan</option>
                        <option className='search-page-filters-boro-options' value="queens">Queens</option>
                        <option className='search-page-filters-boro-options' value="brooklyn">Brooklyn</option>
                        <option className='search-page-filters-boro-options' value="staten">Staten Island</option>
                    </select>
                    <input className='search-page-filters-cuisine' type='text' placeholder='Cuisine' onChange={this.inputHandler} name="cuisine" />
                    <input className="search-page-filters-zip-code" type="text" placeholder='Zip code' onChange={this.inputHandler} name="zipcode"  />
                </div>
            </div>
        )}
    }

export default SearchPage; 