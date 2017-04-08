import React, {Component} from 'react';

export default class SearchBar extends Component {
	render(){
		return(
      <form onSubmit={this.props.searchYelp}>
        <input type="text" className="form-control input-lg" name="param" placeholder="search yelp" />
        <input type="submit" />
      </form>
		)
	}
}