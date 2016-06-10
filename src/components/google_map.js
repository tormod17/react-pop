import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default (props) => {
	console.log('props', props);
  const lat = Number(props.lat);
  const lon = Number(props.lon);

	return (
	  <GoogleMapLoader
        containerElement={ <div className="mapView" /> }
        googleMapElement={
          <GoogleMap
           	ref={(map) => console.log(map)}
            defaultZoom={10}
            defaultCenter={{ lat: lat, lng: lon }}
            center={{lat: lat,  lng: lon }} 
            >
            <Marker
              position={{lat:lat, lng: lon  }}
            />
             
         </GoogleMap>

        }
      />
 	)
}