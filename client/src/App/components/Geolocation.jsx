//geolocation
// import { useCurrentPosition } from 'react-use-geolocation';
// import React from 'react';
// // imports in the different component pages to to routed out to our index.html

// // creat main app componet to be used with react
// function Geolocation(props){
//     const [position, error] = useCurrentPosition();
  
//     if (!position && !error) {
//       return <p>Waiting...</p>;
//     }
  
//     if (error) {
//       return <p>{error.message}</p>;
//     }
//     return (
//         <div>
//           <p>
//             Latitude: {position.coords.latitude}
//           </p>
//           <p>
//             Longitude: {position.coords.longitude}
//           </p>
//         </div>
//       );
// }

// // export to be used and compiled from main index
// export default Geolocation