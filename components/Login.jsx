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
        event.preventDefault();
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
        const {
            user,
            signOut,
            signInWithGoogle,
            handleSignUp
          } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                {
                    user 
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please sign in.</p>
                }
                {
                    user
                    ? <button onClick={signOut}>Sign out</button>
                    : <button onClick={handleSignUp}>Sign in with Google</button>
                }
                </header>
          </div>
        )
    }
}

export default Login