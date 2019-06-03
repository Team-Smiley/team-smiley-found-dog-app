import React from 'react';
import Axios from 'axios';
import PetsFeed from './petsfeed.jsx'

// Grabs all the pets from state of Pets.jsx, maps through the array and passes each pet to PetsFeed
class PetsList extends React.Component {
constructor({ pets }) {
  super({ pets })
  
 //  this.handleSubmit = this.handleSubmit.bind(this);

}

//  componentDidMount() {
//    this.getItems()
//      .then((pets) => {
//        this.setState({
//          pet: pets,
//        });
//      })
//      .catch((err) => {
//        console.error(err);
//      });
//  }

//  handleSubmit() {
// ..ncjewvhvh
//  }


render() {
  const { pets } = this.props;
  return (
    <div>
      {pets.map(pet => <PetsFeed pet={pet} key={pet.id} />)}
    </div>
  )
}
}

export default PetsList