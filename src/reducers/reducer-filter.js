export default function(state = null, action){
	switch(action.type){
		case 'FILTER_GENDER':
			return setGender(state, action);
		case 'FILTER_RATE':
			return setRate(state, action);
		case 'FILTER_AGE':
			return setAge (state, action);

	}
	return state 
}

function setGender(state, action){
		return action.gender
}

function setRate(state, action){
		return action.rate
}

function setAge(state, action){
		return action.age
}