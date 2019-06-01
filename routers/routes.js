// require express
const express = require('express');
// require passport
const passport = require('passport');
// const Sequelize = require('sequelize');
// require('../database-psql/index.js');
const { User, Pets } = require('../database-psql/index.js');
//define router instance
const router = express.Router();
const app = express();
app.set('view engine', 'ejs');


//test get request to login page
router.route('/gmailLogin')
        .post((req, res, next) => {
        // console.log(req.body.result.user);
        const { displayName, email} = req.body.result.user;
        console.log(displayName, email);
        User.findOrCreate({where: {
            name: displayName,
            email: email,
        }})
        //send response on login get request
        // console.log(req.body.user,'yooo');
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
        //use sequelize query on user model to check if user exists in database
            //handle errors in sequelize query
            //if user exists
                //grab session
                //send user already exists response
            //else
        //redirect to login
        res.send('main page')
    }).post((req, res, next) => {
        //add user comments to database
        console.log(req.body);
        res.send('comment added');
        
    })



//export router file
module.exports = router;