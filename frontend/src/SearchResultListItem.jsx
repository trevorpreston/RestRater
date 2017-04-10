import React, { Component } from 'react'

export default class SearchResultListItem extends Component {
	render(){
		return(
			<div className="search-result-item">
				<p> restaurant: {this.props.result.name} </p>
				<p> rating: {this.props.result.rating} </p>
			</div>
		)
	}

}