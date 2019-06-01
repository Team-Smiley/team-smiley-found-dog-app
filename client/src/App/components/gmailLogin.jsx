import React from 'react';
// import axios to send user info to database
import axios from 'axios';
import { auth, provider } from '../firebaseConfig.js';

/*It is created as a component function in the react hooks.*/
function gmailLogin(props){
        //use firebase signinwithpopupmethod. takes google auth provider
        auth.signInWithPopup(provider).then((result) => {
            //reset state to current logged in user
            // this.setState({
            //     user: result.user
            // })
            axios.post('/gmailLogin', {
                result
            }).then((res) => {
                console.log('this works');
            })
        })
    }

export default gmailLogin 