const { Client } = require('pg')
const client = new Client()
//require sequelize

//require bcrypt
const bcrypt = require('bcrypt');

// setup helper function for hashing passwords with bcrypt 

await client.connect()