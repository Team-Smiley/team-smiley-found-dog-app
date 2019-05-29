// creating a login page
import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

    }
    // render basic login form
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label> Enter Username:
                        <input type="text" name="username" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label> Enter Password:
                        <input type="text" name="password" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="button" value="Submit" onSubmit={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default Login