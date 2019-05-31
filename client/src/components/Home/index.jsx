import React from 'react';
import Comments from '../Comments'

// create component function Home, for HomePage, so it can be used with react hooks
function Home(props){
    return(
        <div>
        <Comments />
        HomePage Component
        </div>
    )
}

// export to be routed in main App 
export default Home 