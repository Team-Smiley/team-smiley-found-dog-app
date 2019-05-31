// creating a login page
import React from 'react'
// import CommentList from './CommentList.jsx';

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
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
        const { logout } = this.props;
        return (
            <div >
                Welcome to Found Dog!
                {/* <CommentList /> */}
                {/* <button onClick={this.props.logout}>Log Out</button> */}
            </div>
        )
    }
}

export default CommentList