require('dotenv').config();
// require express
const express = require('express');
//require path to serve static files
const path = require('path');
//access routes in router file
const router  = require('../routers/routes.js');
const bodyParser = require('body-parser');

// require('../database-psql/index.js');

// call express and assign to variable
const app = express();
//dotenv

app.set('view engine', 'ejs');
//middleware
//serve static files
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

// get request to /user
app.get('/user', router);

// trying to implement use of single page app, re-rirect requests to index.html which handles routing
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

//use routes in router file
app.use('/', router);

//run server on port number
app.listen(8080, () => {
    console.log('listening on port 8080!');
});