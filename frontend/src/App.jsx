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
      activeCategory: undefined,
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
        console.log('~~~~ '+data[0].id)
        this.setState({
          activeCategory: 'saved',
          savedRestaurants: data
        })
        // console.log('state updated to: ' + this.state.savedRestaurants[0].id)
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
        this.setState({
          activeCategory: 'yelp',
          yelpResults: data.businesses
        })
        // console.log('yelp state: ' +this.state.yelpResults[0].name)
      })
  }

  renderResults(){
    if(this.state.yelpResults && (this.state.activeCategory === 'yelp')) {
      console.log('yelp results found.  Rendering SearchResults component')
      return <SearchResults yelpResults={this.state.yelpResults}/>
    } else if (this.state.activeCategory === 'saved') {
      return <SavedRestaurants restaurantsFromState={this.state.savedRestaurants}/>
    } else {
      console.log('no yelp results in state.  Rendering prompt to search')
      return <p>Search for a restaurant! </p>
    }
  }

  render(){
    return (
      <div>
        <Search searchYelp={this.fetchYelpData.bind(this)} getSavedRestaurants={this.getSavedRestaurants.bind(this)}/>
        <div className="mega-container">
          <div className="parent-container">
            <div className="map">
              <GMap/>
            </div>
            <div className="results-container">
              <div className="saved-restaurants-container">
                {this.renderResults()}
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}
