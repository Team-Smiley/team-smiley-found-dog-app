import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Paper, Avatar, Button} from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import Comment from './Comment.jsx';



//make handle change to bind comment input 
function Comments(props) {
    const [state, setState] = useState({comments: [], message: ''});

    const { message, comments } = state;
    //rerender once on every state change
    useEffect(() => {
        //axios get request to get messages from database
        axios.get('/comments').then((results) => {
            setState({comments: results.data});
        });
        console.log('I will run only once');
    }, []);
    const addComment = (comment) => {
        console.log(comment, 'comment');
        axios.post('/comments', {
            message: comment
        }).then(() => {
            axios.get('/comments').then((results) => {
                console.log(results, 'array')
                setState({comments: results.data});
            })
        })
        // console.log(setState, 'whats th`is?')
        // axios.post
    }
    const handleMessage = (e) => {
        console.log(e.target.value, 'hit');
        setState({message: e.target.value});
    }
    
    console.log(comments, 'comments');
    return (
        <div>
            <div>
                {comments ? comments.map(comment => <Comment comment={comment}></Comment>) : 'no comments yet'}
            </div>
            <label>Comment:
                <input type={message} onChange={handleMessage} />
            </label>
            <button onClick={() => addComment(message)}>
                Add Comment
            </button>
        </div>
    )
}

export default Comments
