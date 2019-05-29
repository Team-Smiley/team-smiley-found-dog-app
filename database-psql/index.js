const { Client } = require('pg')
const client = new Client()

//require bcrypt
const bcrypt = require('bcrypt');

// setup helper function on user model for hashing passwords with bcrypt 
User.hash = (password) => {
    // implement genSalt method on bcrypt object. takes number of times to salt and callback
        // implement hash method of bcrypt object. takes password, salt from genSalt callback, and a callback
            //store hash in database 
}

await client.connect()