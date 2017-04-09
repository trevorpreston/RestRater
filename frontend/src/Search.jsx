import React, {Component} from 'react';

export default class SearchBar extends Component {
	render(){
		return(
			<div className="search-container">
	      <form onSubmit={this.props.searchYelp}>
	        <input type="text" className="search-input" name="param" placeholder="search yelp" />
	        <input className="search-button" type="submit"/>
	      </form>
      </div>
		)
	}
}