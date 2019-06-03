import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputLabel, Input, Typography, Button, FormControl} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Comment from './Comment.jsx';
const styles = theme => ({
main: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
    width: 400,
    marginLeft: "auto",
    marginRight: "auto"
    }
},
paper: {
    marginTop: theme.spacing(8),
    display: "100px",
    flexDirection: "column",
    alignItems: "left",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
},
avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main
},
form: {
    marginTop: theme.spacing()
},
submit: {
    marginTop: theme.spacing(3)
}
});

//make handle change to bind comment input 
function Comments(props) {

    const [state, setState] = useState({comments: [], message: ''});

    const { message, comments } = state;
    // re-render once on every state change
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

    const { classes } = props;

    return (
    <div>
        <div>
            {" "}
            <Typography component="h1">
            Let us know if you have seen some animals
            </Typography>
            {comments
            ? comments.map(comment => <Comment comment={comment} />)
            : "no comments yet"}
        </div>
        <form class={classes.form}>
            <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="comment" width="100px">
                Comment
            </InputLabel>
            <Input
                disableUnderline={true}
                name="comment"
                type={message}
                width="100px"
                id="comment"
                autoComplete="off"
                onChange={handleMessage}
            />
            </FormControl>
        </form>
        <Button
            type="submit"
            width="100px"
            variant="contained"
            color="primary"
            onClick={() => addComment(message)}
        >
            Add Comment
        </Button>
    </div>
    );
}

export default withStyles(styles)(Comments);
