export function selectArtist(artist, artists) {
	// selectArtist is an action creator .
	// an object with a type property.
	return {
		type: 'ARTIST_SELECTED',
		payload: artist
	}
}

export function filterByGender(gender) {
	console.log('GENDER',gender);
	return {
		type: 'FILTER_GENDER',
		gender
	}
}


export function filterByRate(rate) {
	console.log('Rate',rate);
	return {
		type: 'FILTER_RATE',
		rate
	}
}


export function filterByAge(age) {
	console.log('Age',age);
	return {
		type: 'FILTER_AGE',
		age
	}
}