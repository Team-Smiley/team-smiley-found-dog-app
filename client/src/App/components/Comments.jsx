import React from 'react';
import axios from 'axios';
// trigger post request on button click to store comments in database
const addComment = (comment) => {
    //axios post request to store comment in database
    axios.post('/comments', {
        comment
    }).then((res) => {
        //check route to see if server post request was triggered
    })
    //reset state by adding comment to array
}
//make handle change to bind comment input 
function Comments(props) {
    return (
        <div>
            <label>Comment:
                <input type="text" name="message" />
            </label>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                // route login back to login
                component={Link}
                to="/signin"
                className={classes.submit}>
                Back to Sign-In
            </Button>
        </div>
    )
}

export default Comments