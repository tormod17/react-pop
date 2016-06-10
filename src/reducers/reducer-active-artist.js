	//state is not application state, just state for this reducer 
export default function(state = null, action){
	switch(action.type){
		case 'ARTIST_SELECTED':
			return action.payload;
	}
	return state 
}