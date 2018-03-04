import React, { Component } from 'react';
import './secondPage.css';

class App extends Component {
    render() {
        return (
            <div className='second-Page'>
                <h1 className='second-header'>Don't Dine and Die</h1>
                <div className='search-name'> <input text='text' placeholder='Search keyword' className='search-' /> </div>
                <div className="sort-menu">
                    <p className='complaint'> Complaint # </p>
                    <input className='zip' text='text' placeholder='Zip' />
                    <select className='boro' placeholder='Borough'>
                        <option className='dropdown-opts' value="bronx">Bronx</option>
                        <option className='dropdown-opts' value="manhattan">Manhattan</option>
                        <option className='dropdown-opts' value="queens">Queens</option>
                        <option className='dropdown-opts' value="brooklyn">Brooklyn</option>
                        <option className='dropdown-opts' value="staten">Staten Island</option>
                    </select>
                    <input className='cuisine' text='text' placeholder='Cuisine' />
                </div>
            </div>
        )
    }
}
export default App; 