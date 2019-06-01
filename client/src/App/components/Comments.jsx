import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Paper, Avatar, Button} from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import Comment from './Comment.jsx';



//make handle change to bind comment input 
function Comments(props) {
    const [state, setState] = useState({comments: [], message: ''})
    const { message, comments } = state;
    const addComment = (comment) => {
        axios.post('/comments', {
            message: 'i fucking suck'
        }).then((res) => {
            axios.get('/comments').then((results) => {
                setState({comments: results});
            })
        })
        // console.log(setState, 'whats this?')
        // axios.post
    }
    //rerender once on every state change
    useEffect(() => {
        //axios get request to get messages from database
        axios.get('/comments').then((results) => {
            setState({comments: results.data});
        });
        console.log('I will run only once');
    }, []);
    return (
        <div>
            <div>
                {comments.map(comment => <Comment comment={comment}></Comment>)}
            </div>
            <label>Comment:
                <input type="text" name="message" />
            </label>
            <button onClick={addComment}>
                Add Comment
            </button>
        </div>
    )
}

export default Comments