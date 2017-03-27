import React, { Component } from 'react';
import './App.css';
import SavedRestaurants from './SavedRestaurants.jsx'

class App extends Component {
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
        <button onClick={() => this.getSavedRestaurants()}> Get dem Restaurants </button>
        <SavedRestaurants restaurantsFromState = {this.state.savedRestaurants}/>
      </div>
    )
  }
}

export default App;
