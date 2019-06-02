import React from 'react';
// import map api
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Comments from '../../components/Comments.jsx'


function LostMap() {
       return (
         <div>
           <LoadScript
             id="script-loader"
             googleMapsApiKey="AIzaSyA2c-zDbhrd763cPEygoTp2Qj9kylSHwJs"
           //other proprties here 
           >
             <GoogleMap
               id='losr-dog-map'
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