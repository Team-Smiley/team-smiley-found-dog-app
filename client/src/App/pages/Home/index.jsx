import React from 'react';
import Geolocation from '../../components/Geolocation.jsx';

// create component function Home, for HomePage, so it can be used with react hooks
function Home(props){
    return(
        <div>
        <Geolocation />
        HomePage Component
        </div>
    )
}

// export to be routed in main App 
export default Home 