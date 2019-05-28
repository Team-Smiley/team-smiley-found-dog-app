// require express
const express = require('express');
// call express and assign to variable
const app = express();

//run server on port number
app.listen(3000, () => {
    console.log('listening on port 3000!');
});