import React from 'react';
// import map api
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Comments from '../../components/Comments.jsx'

function LostMap() {
       return (
        <div>
          <LoadScript
            id="script-loader"
            googleMapsApiKey="MAP_API_KEY"
          //other proprties here 
          >
            <GoogleMap
              id='lost-dog-map'
          // other properties here >
          >
              {/* Map components */}
            </GoogleMap>
          </LoadScript>
        
          <Comments></Comments>
        </div>
       )
    }

//export it for app to route
export default LostMap 