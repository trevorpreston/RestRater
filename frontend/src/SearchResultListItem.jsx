import React, { Component } from 'react'

export default class SearchResultListItem extends Component {
	render(){
		return(
			<div>
				<p> {this.props.result.name} </p>
				<p> {this.props.result.rating} </p>
			</div>
		)
	}

}