import React from 'react';
import axios from 'axios';
// trigger post request on button click to store comments in database
const 
//make handle change to bind comment input 
function Comments(props) {
    return (
        <div>
            <label>Comment:
                <input type="text" name="message" />
            </label>
            <br/>
        </div>
    )
}

export default Comments