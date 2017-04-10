import React, {Component} from 'react';
import SearchResultListItem from './SearchResultListItem'


export default class SearchBar extends Component {
	// renderSearchResults(searchResults){
	// 	console.log('render search results ')
	// 	console.log(searchResults)
	// 	if(searchResults){
	// 		return searchResults.map( result => {
	// 			return (
	// 				<div>
	// 					<p> {result.name} </p>
	// 					<p> {result.rating} </p>
	// 				</div>
	// 			)
	// 		} )
	// 	} else {
	// 		return <p> search for a restaurant! </p>
	// 	}
	
	render(){
		return(
			<div>
				<h1 className="results-header search-header"> search results: </h1>
				<div>
					{	this.props.yelpResults.map((result) => {
							return <SearchResultListItem className="search-item" result={result}/>
						})
					}
				</div>
			</div>
		)
	}
}

