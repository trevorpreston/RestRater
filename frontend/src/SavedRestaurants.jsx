import React, { Component } from 'react';

export default class SavedRestaurants extends Component {
	renderRestaurants(restaurants){
		return restaurants.map( restaurant => {
			return <p key={restaurant.id}> { restaurant.title } </p>;
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