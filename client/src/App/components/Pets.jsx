import React from 'react';
import Axios from 'axios';

class Pets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {
        const { name, value } = event.target;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    handleSubmit(e) {
      const { name, type, message } = this.state;
      e.preventDefault();
        // post request to db with info
        Axios.post('/user', {
          name: name,
          type: type,
          message: message,
        }).then(response => console.log(response))
        .catch(err => console.error(err));
      }
        

       

    render() {
        return (
            <div>
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