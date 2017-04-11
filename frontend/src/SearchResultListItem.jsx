import React, { Component } from 'react'

export default class SearchResultListItem extends Component {
	constructor(){
		super()
		this.state = {
			grade: undefined
		}
	}

	componentDidMount(){
		this.fetchHealthGrades()
	}

	fetchHealthGrades(){
				// console.log('mounting search results list item ' + this.props.result.name)
		// let searchParam = this.props.result.name
		// console.log(searchParam.slice(0, 3))

		fetch(`https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=${this.props.result.name.toUpperCase()}&$where=grade IS NOT NULL`)
			.then( r=> r.json())
			.then( data => {
				// let grade
				// for(i=0 ; i<data.length; i++){
				// 	if()
					this.setState({
						grade: data[data.length-1].grade
					})
				// }
				console.log('COMPONENT GRADE ' + this.state.grade)
			})
			.catch(err => console.log(err))
	}

	render(){
		return(
			<div className="result-item">
				<p> name: {this.props.result.name} </p>
				<p> rating: {this.props.result.rating} </p>
				<p> grade: {this.state.grade} </p>
			</div>
		)
	}

}