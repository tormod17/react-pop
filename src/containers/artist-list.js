import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectArtist } from '../actions/index.js';
import { bindActionCreators } from 'redux';


class ArtistList extends Component {
    renderList() {

        console.log(this.props, 'ARisTLIST')
        let filteredArtists = [];

        if (this.props.filter === 'M' || this.props.filter === 'F') {
            filteredArtists = this.props.artists.filter((artist) => {
                if (this.props.filter === null) {
                    return
                } else {
                    return this.props.filter === artist.gender;
                }
            })
        }
        if (this.props.filter === 'Rate') {
            filteredArtists = this.props.artists.sort((a, b) => a.rate - b.rate)
        }
        if (this.props.filter === 'Age') {
            filteredArtists = this.props.artists.sort((a,b) => a.age -b.age)
        }
        if (this.props.filter === null){
            filteredArtists = this.props.artists.slice(0);
        }
        return filteredArtists.map((artist, index, array) => {

            return (
             	<ul className="artist-row"
             	 onClick = {() => this.props.selectArtist(artist, array) }
             	 key = { artist.uuid }
                  >
	               <li>{ artist.age } </li>
	               <li>{ artist.rate } </li>
	               <li>{ artist.gender} </li>
                   <li><i className="fa fa-chevron-right" aria-hidden="true"></i></li>
	            </ul>

            );
        })
    }
    render() {
        return ( 
                <div className="scrollable">
	            	{ this.renderList() }
                </div>     

        )
    }
}

//Anything returned from this function will end up as props  on the Artist container. 
function mapDispatchToProps(dispatch) {
    // whenever select Artist is called result should be passed to reducers.
    return bindActionCreators({ selectArtist: selectArtist }, dispatch)
}

function mapStateToProps(state) {

    return {
        artists: state.artists,
        filter: state.filter
    };
}

// Promote ArtistList from a component to a container -it needs to know 
export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);
