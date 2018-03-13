import React, {Component} from 'react';
import './SearchPage.css';
import queries from '../queries/queries';
import ListSingle from './ListSingle';

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            zipcode: '',
            cuisine: '',
            borough: '',
            data: []
        }
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt
                .charAt(0)
                .toUpperCase() + txt
                .substr(1)
                .toLowerCase();
        });
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.log)
        //calling zipcode
        if (e.target.value.length >= 5 && e.target.name === 'zipcode') {
            queries
                .getByZip(e.target.value)
                .then(data => {
                    console.log(data);
                    this.setState({data: data.data})
                })
        }

        if (e.target.name === 'cuisine') {
            queries
                .getCuisine(this.toTitleCase(e.target.value))
                .then(data => {
                    this.setState({data: data.data})
                })
        }

        if (e.target.name === 'borough') {
            queries
                .getByBoro(e.target.value.toUpperCase())
                .then(data => {
                    this.setState({data: data.data})
                })
        }

    }

    complaintHandler = () => {
        const {complaintNumber} = this.state
        this.setState({
            complaintNumber: !complaintNumber
        }, this.log)
    }

    log = () => console.log(this.state)

    render() {
        const {cuisine, zipcode, data} = this.state
        console.log(data)
        return (
            <div className='search-page'>
                <h1 className='search-page-header'>Restaurant Search</h1>
                <div className='search-page-filters'>
                    <select
                        className='search-page-filters-boro box-shadow'
                        placeholder='Borough'
                        name='borough'
                        onChange={this.inputHandler}>
                        <option value=''>Borough</option>
                        <option value="bronx">Bronx</option>
                        <option value="manhattan">Manhattan</option>
                        <option value="queens">Queens</option>
                        <option value="brooklyn">Brooklyn</option>
                        <option value="staten">Staten Island</option>
                    </select>
                    <input
                        className='search-page-filters-cuisine box-shadow'
                        type='text'
                        placeholder='Cuisine'
                        onChange={this.inputHandler}
                        name="cuisine"
                        value={cuisine}/>
                    <input
                        className="search-page-filters-zip-code box-shadow"
                        type="text"
                        placeholder='Zip code'
                        onChange={this.inputHandler}
                        name="zipcode"
                        value={zipcode}/>
                </div>
                <div className='search-page-list'>
                    {data.length === 0
                        ? <p>Please enter a location or cuisine.</p>
                        : data.map(obj => {
                            return <ListSingle
                                complaintNumber={obj.count}
                                restaurantName={obj.dba}
                                complaintDescription={obj.violation_description}/>
                        })}
                </div>
                
            </div>
        )
    }
}

export default SearchPage;
