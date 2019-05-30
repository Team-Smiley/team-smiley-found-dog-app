const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize('Paws', 'root', 'orangetrainfalcon', {
  host: 'paws.cykfkgwxg7am.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',
});

//require bcrypt

// setup helper function on user model for hashing passwords with bcrypt 
// User.hash = (password) => {
    // implement genSalt method on bcrypt object. takes number of times to salt and callback
        // implement hash method of bcrypt object. takes password, salt from genSalt callback, and a callback
            //store hash in database 
// }


//to check and see if sequilize is running
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// await client.connect()