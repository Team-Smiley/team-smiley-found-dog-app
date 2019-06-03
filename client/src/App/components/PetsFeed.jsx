import React from 'react';
import Axios from 'axios';

// grabs each pet from PetsList, displays name, type, message, created_at, contact info, and image
const PetsFeed = ({ pet }) => (
 <div>
   <h1>{ pet.name }</h1>
   <h1>{ pet.type }</h1>
   <h4>{ pet.message }</h4>
   <h5>{ pet.created_At }</h5>
   <h5>{ pet.contact }</h5>
   <a href={pet.image} target="blank" >Lost Pet Pic</a>
 </div>

)

export default PetsFeed;