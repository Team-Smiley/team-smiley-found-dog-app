import React from 'react';
import Axios from 'axios';
// require('dotenv').config;
// import cloudinary from 'cloudinary';
import PetsList from './PetsList.jsx';
import Comments from './Comments.jsx';

class Pets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: '',
            message: '',
            image: '',
            contact: '',
            pets: [],
            widget: window.cloudinary.createUploadWidget({
        cloud_name: `duubp6wjp`,
        // imageUrl: 'https://api.cloudinary.com/v1_1/dyucbqgew/image/upload'
        uploadPreset: `wwcugh6n` },
        (err, result) => {this.checkUploadResult(result)}
      )
        }
        // binding of all the functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showWidget = this.showWidget.bind(this);
        this.checkUploadResult = this.checkUploadResult.bind(this);
        this.getPets = this.getPets.bind(this);
    }

    // grabs information from forms by name and value entered, sets state
    handleChange() {
        const { name, value } = event.target;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    // Submits information in forms and picture to database
    handleSubmit(event) {
      const { name, type, message, image, contact } = this.state;
      event.preventDefault();
        // post request to db with info
        Axios.post('/user', {
          name: name,
          type: type,
          message: message,
          contact: contact,
          image: image,
        }).then(response => console.log(response))
        .catch(err => console.error(err));
      }
    
      // allows widget to be displayed
    showWidget(e) {
      this.state.widget.open()
    }

    // when image is loaded to cloudinary, grab url to save into database
    checkUploadResult(resultEvent) {
      if (resultEvent.event === 'success') {
        console.log(resultEvent);
        this.setState({
          image: resultEvent.info.secure_url
        })
      }
    }

    // gets all pets from database to show on page
    getPets() {
      Axios.get('/user')
        .then(pets => {
          console.log(pets);
          let allPets = [];
          pets.data.forEach(pet => allPets.push(pet));
          this.setState({
            pets: allPets,
          })
        })
        .catch(err => console.error(err));
    }

       

    render() {
      const { pets } = this.state;
        return (
            <div>
              <button onClick={this.showWidget}>Upload Pet</button>
                <br />
                <label>Pet Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <br/>
                <label>Type:
                    <input type="text" name="type" onChange={this.handleChange} />
                </label>
                <br/>
                <label>Message:
                    <input type="text" name="message" onChange={this.handleChange} />
                </label>
                <br/>
                <label>Contact Info:
                    <input type="text" name="contact" onChange={this.handleChange} />
                </label>
                <br/>
                {/* button for cloudinary for image of pet */}
                <button onClick={this.handleSubmit} >Submit</button>
                <br/>
                <button onClick={this.getPets} >Click for Lost Pets</button>
                <PetsList pets={pets} />
                {/* <Comments /> */}
            </div>
        )
    }
}

export default Pets;