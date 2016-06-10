import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';

class ArtistDetail extends Component {
	render(){
		if(!this.props.artist){
			return null
		}
		
		const lon = this.props.artist.longitude;
		const lat = this.props.artist.latitude;

		return (
			<div className="detailsContainer ">
			  <h3>Artist Details</h3>
		
			  <div className="list-group">
			  	<div className="list-group-item">Gender: {this.props.artist.gender}</div>
			  	<div className="list-group-item">Rate: {this.props.artist.rate}</div>
			  	<div className="list-group-item">Age: {this.props.artist.age}</div>
			 </div>
				<div className="mapView "><GoogleMap  lon={lon} lat={lat} /></div>
			</div>

		)
	}
}

function mapStateToProps(state){
	return {
		artist: state.activeArtist
	}
}

export default connect(mapStateToProps)(ArtistDetail);