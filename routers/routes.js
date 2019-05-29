// require express
const express = require('express');
// require passport
const passport = require('passport');
//define router instance
const router = express.Router();

//test get request to login page
router.route('/login')
    .get( (req, res, next) => {
        //send response on login get request
        res.send('login stuff');
    }).post((req, res, next) => {
        //send response on login get request
        res.send('get session from database');
    });

router.route('/signup')
    .get((req, res, next) => {
        //send response on login get request
        res.send('signup stuff');
    }).post((req, res, next) => {
        //get username and password stored in request body
        //use sequelize query on user model to check if user exists in database
            //handle errors in sequelize query
            //if user exists
                //send user already exists response
            //else
                //make a new user. call helper function to hash password
                //store new user in database
        //send response on login get request
        res.send('add user to database');
    });

router.route('/user')
    .get((req, res, next) => {
        //if user is logged in
            //send response
        //redirect to login
        res.send('main page')
    }).post((req, res, next) => {
        //add user comments to database
        res.send('comment added');
    })



//export router file
module.exports = router;