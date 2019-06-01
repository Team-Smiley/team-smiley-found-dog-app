import React from 'react';
// import map api
import { GoogleMap, LoadScript } from '@react-google-maps/api'


function LostMap() {
       return (
        <LoadScript
          id="script-loader"
          googleMapsApiKey="MAP_API_KEY"
        //other proprties here 
        >
          <GoogleMap
            id='losr-dog-map'
        // other properties here >
        >
            {/* Map components */}
          </GoogleMap>
        </LoadScript>
       )
    }

//export it for app to route
export default LostMap 