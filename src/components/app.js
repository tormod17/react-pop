import React from 'react';
import { Component } from 'react';


import ArtistList    from '../containers/artist-list';
import ArtistDetail  from '../containers/artist-detail';
import FilterPanel   from '../containers/filter-panel';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">

      	<h1>POP Please select an Artist to get started.</h1>
      	<ArtistDetail/>
      	<FilterPanel />
        <ArtistList />      
      
      </div>
    );
  }
}
