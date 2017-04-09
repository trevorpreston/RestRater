import React, {Component} from 'react';

export default class SearchBar extends Component {
	renderSearchResults(searchResults){
		console.log('render search results ')
		console.log(searchResults)
		if(searchResults){
			return searchResults.map( result => {
				return (
					<div>
						<p> {result.name} </p>
						<p> {result.rating} </p>
					</div>
				)
			} )
		} else {
			return <p> search for a restaurant! </p>
		}
	}
	render(){
		return(
			<div>
				<h1>RESULTS</h1>
				<div>
					{ this.renderSearchResults(this.props.yelpResults) }
				</div>
			</div>
		)
	}
}

