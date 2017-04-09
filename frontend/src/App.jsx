import React, { Component } from 'react';
import './App.css';
import SavedRestaurants from './SavedRestaurants.jsx';
import Search from './Search.jsx'
import SearchResults from './SearchResults.jsx'
import GMap from './GMap.jsx'

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

  renderSearchResults(){
    if(this.state.yelpResults){
      console.log('yelp results found.  Rendering SearchResults component')
      return <SearchResults yelpResults={this.state.yelpResults}/>
    } else {
      console.log('no yelp results in state.  Rendering prompt to search')
      return <p>Search for a restaurant! </p>
    }
  }

  render(){
    return (
      <div>
        <Search searchYelp={this.fetchYelpData.bind(this)}/>
        <div className="mega-container">
          <div className="parent-container">
            <div className="map">
              <GMap/>
            </div>
            <div className="results-container">
              <button className="view-saved" onClick={() => this.getSavedRestaurants()}> View Saved Restaurants </button>
              <div className="saved-restaurants-container">
                <SavedRestaurants restaurantsFromState={this.state.savedRestaurants}/>
                {this.renderSearchResults()}
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}
