import React from 'react';
import Axios from 'axios';
// require('dotenv').config;
// import cloudinary from 'cloudinary';

class Pets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: '',
            message: '',
            image: '',
            widget: window.cloudinary.createUploadWidget({
        cloud_name: `duubp6wjp`,
        // imageUrl: 'https://api.cloudinary.com/v1_1/dyucbqgew/image/upload'
        uploadPreset: `wwcugh6n` },
        (err, result) => {this.checkUploadResult(result)}
      )
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showWidget = this.showWidget.bind(this);
        this.checkUploadResult = this.checkUploadResult.bind(this);
        this.getPets = this.getPets.bind(this);
    }

    handleChange() {
        const { name, value } = event.target;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    handleSubmit(event) {
      const { name, type, message, image } = this.state;
      event.preventDefault();
        // post request to db with info
        Axios.post('/user', {
          name: name,
          type: type,
          message: message,
          image: image,
        }).then(response => console.log(response))
        .catch(err => console.error(err));
      }
    
    showWidget(e) {
      this.state.widget.open()
    }

    checkUploadResult(resultEvent) {
      if (resultEvent.event === 'success') {
        console.log(resultEvent);
        this.setState({
          image: resultEvent.info.secure_url
        })
      }
    }

    getPets() {
      Axios.get('/user')
        .then(res => console.log(res));
    }

       

    render() {
      
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
                {/* button for cloudinary for image of pet */}
                <button onClick={this.handleSubmit} >Submit</button>
                <button onClick={this.getPets} >Click for Lost Pets</button>
            </div>
        )
    }
}

export default Pets;