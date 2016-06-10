import { combineReducers } from 'redux';
import ArtistsReducer from './reducer-artists';
import ActiveArtist from './reducer-active-artist.js';
import Filter from './reducer-filter.js';

const rootReducer = combineReducers({
  artists: ArtistsReducer,
  activeArtist: ActiveArtist,
  filter: Filter,
  age: Filter,
  gender: Filter 
});

export default rootReducer;
