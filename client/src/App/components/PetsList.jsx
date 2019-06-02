import React from 'react';
import Axios from 'axios';
import PetsFeed from './petsfeed.jsx'

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

//  }


render() {
    const { pets } = this.props;
  return (
    <div>
      <h1>Lost Pets</h1>
      {pets.map(pet => <PetsFeed pet={pet} key={pet.id} />)}
    </div>
  )
}
}

export default PetsList