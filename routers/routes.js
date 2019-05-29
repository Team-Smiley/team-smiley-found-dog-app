// require express
const express = require('express');

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
        //send response on login get request
        res.send('add user to database');
    });




//export router file
module.exports = router;