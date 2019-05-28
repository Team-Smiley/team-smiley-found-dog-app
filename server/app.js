// require express
const express = require('express');
//require path to serve static files
const path = require('path');
// call express and assign to variable
const app = express();

//middleware
//serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

//run server on port number
app.listen(8080, () => {
    console.log('listening on port 3000!');
});