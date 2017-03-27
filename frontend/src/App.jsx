import React, { Component } from 'react';
import './App.css';
import SavedRestaurants from './SavedRestaurants.jsx';
import Search from './Search.jsx'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      savedRestaurants: []
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

  render(){
    return (
      <div>
        <Search/>
        <button className="viewSaved" onClick={() => this.getSavedRestaurants()}> View Saved Restaurants </button>
        <div className="savedRestaurantsContainer">
          <SavedRestaurants restaurantsFromState={this.state.savedRestaurants}/>
        </div>
      </div>
    )
  }
}
