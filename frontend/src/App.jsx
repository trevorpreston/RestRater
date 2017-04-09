import React, { Component } from 'react';
import './App.css';
import SavedRestaurants from './SavedRestaurants.jsx';
import Search from './Search.jsx'
import SearchResults from './SearchResults.jsx'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      savedRestaurants: [],
      yelpSearchParam: undefined,
      yelpResults: undefined

    }
    console.log(this.state);
  }

  getSavedRestaurants(){
    console.log('clicked');
    return fetch('http://localhost:8080/saved_restaurants')
      .then(r => r.json())
      .then(data => {
        this.setState({savedRestaurants: data})
        console.log('state updated to: ' + this.state.savedRestaurants[0].title)
      })
      .catch(err => console.log('=======',err))
    }

  fetchYelpData(event){
    event.preventDefault()
    let param = event.target.elements.param.value
    console.log('PARAM IS ' + param)
    fetch(`http://localhost:8080/yelp_api/${param}`)
      .then( r => r.json())
      .then( data => {
        this.setState({yelpResults: data.businesses})
        // console.log('yelp state: ' +this.state.yelpResults[0].name)
      })
  }

  render(){
    return (
      <div>
        <Search searchYelp={this.fetchYelpData.bind(this)}/>
        <button className="viewSaved" onClick={() => this.getSavedRestaurants()}> View Saved Restaurants </button>
        <div className="savedRestaurantsContainer">
          <SavedRestaurants restaurantsFromState={this.state.savedRestaurants}/>
        </div>
        <SearchResults yelpResults={this.state.yelpResults}/>
      </div>
    )
  }
}
