import React, { Component } from 'react';

export default class SavedRestaurants extends Component {
	renderRestaurants(restaurants){
		return restaurants.map( (restaurant, index) => {
			return (
				<div className="result-item">
					<p key={ index }> name: { restaurant.title } </p>
					<p> rating: { restaurant.yelp_rating } </p>
				</div>
			)
		});
	}

	render(){
		console.log('rendering savedrestaurants!')
		return (
			<div>
				<h1 className="results-header saved-header"> saved restaurants: </h1>
				{ this.renderRestaurants(this.props.restaurantsFromState) }
			</div>
		)
	}
}