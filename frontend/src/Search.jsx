import React, {Component} from 'react';

export default class SearchBar extends Component {
	handleSubmit(event){
		event.preventDefault()
		console.log('~~~~~~ HEYA~~~~~~')
	}
	render(){
		return(
			<div>
				<form onSubmit={() => {this.handleSubmit()}}>
					<input type="text"/>
					<input type="submit" value="submit"/>
				</form>
			</div>
		)
	}
}