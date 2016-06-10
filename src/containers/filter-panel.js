import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { filterByGender }   from '../actions/index.js';
import { filterByRate }     from '../actions/index.js';
import { filterByAge }      from '../actions/index.js';


class FilterPanel extends Component {

	render(){
		return (
			<ul className="artist-row buttons">
				<li onClick={()=>this.props.handleClick('Age')}> <i className="fa fa-sort-numeric-asc" aria-hidden="true"></i>&nbsp;Age </li>
	 			<li onClick={()=>this.props.handleClick('Rate')}> <i className="fa fa-sort-numeric-asc" aria-hidden="true"></i>&nbsp; Rate </li>
	 			<li onClick={()=>this.props.handleClick('M')}>  <i className="fa fa-mars" aria-hidden="true"></i></li>
	 			<li onClick={()=>this.props.handleClick('F')}>  <i className="fa fa-venus" aria-hidden="true"></i></li>	 		
	 		</ul>
		)
	}
}

function mapDispatchToProps(dispatch){
   
	return { 
		handleClick: function(input){
			switch (input) {
				case 'M':
				case 'F':
					return 	dispatch(filterByGender(input));
				case 'Age':
					return	dispatch(filterByAge(input));
				case 'Rate':
					return 	dispatch(filterByRate(input));
			}
		}
	};
}



export default connect(null, mapDispatchToProps)(FilterPanel);