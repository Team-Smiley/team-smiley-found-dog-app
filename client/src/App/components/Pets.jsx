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
            widget: window.cloudinary.createUploadWidget({
              cloud_name: `${process.env.CLOUD_NAME}`,
              uploadPreset: `${process.env.NAME_PRESET}` },
              (err, result) => { }
            )
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showWidget = this.showWidget.bind(this);
    }

    handleChange() {
        const { name, value } = event.target;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    handleSubmit(event) {
      const { name, type, message } = this.state;
      event.preventDefault();
        // post request to db with info
        Axios.post('/user', {
          name: name,
          type: type,
          message: message,
        }).then(response => console.log(response))
        .catch(err => console.error(err));
      }
    
    showWidget(e) {
      widget.open()
    }

       

    render() {
      // let widget = window.cloudinary.createUploadWidget({
      //   cloud_name: `${process.env.CLOUD_NAME}`,
      //   uploadPreset: `${process.env.NAME_PRESET}` },
      //   (err, result) => { }
      // )
      // widget.open();
        return (
            <div>
              <button onClick={this.showWidget}>Upload Pet</button>
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
            </div>
        )
    }
}

export default Pets;