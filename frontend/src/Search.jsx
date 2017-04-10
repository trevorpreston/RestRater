import React, {Component} from 'react';

export default class SearchBar extends Component {
	render(){
		return(
			<div className="search-container">
				<div className="search-wrapper">
		      <form onSubmit={this.props.searchYelp}>
		        <input type="text" className="search-input" name="param" placeholder="find a restaurant" />
		        <input className="search-button" type="submit" value="search"/>
		      </form>
	        <button className="search-button saved-button" onClick={() => this.props.getSavedRestaurants()}> saved restaurants </button>
        </div>
      </div>
		)
	}
}