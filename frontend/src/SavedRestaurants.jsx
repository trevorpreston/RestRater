import React, { Component } from 'react';

export default class SavedRestaurants extends Component {
	renderRestaurants(restaurants){
		return restaurants.map( restaurant => {
			return (
				<div className="result-item">
					<p key={restaurant.id}> name: { restaurant.title } </p>
					<p> rating: { restaurant.yelp_rating } </p>
				</div>
			)
		});
	}

	render(){
		console.log('rendering savedrestaurants!')
		return (
			<div>
				{ this.renderRestaurants(this.props.restaurantsFromState) }
			</div>
		)
	}
}