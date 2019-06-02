const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = new Sequelize(`${process.env.MY_DB}`, `${process.env.MY_UN}`, `${process.env.MY_PW}`, {
  host: `${process.env.MY_HOST}`,
  dialect: 'postgres',
  port: process.env.PORT // add port
});

//require bcrypt

// setup helper function on user model for hashing passwords with bcrypt 
// User.hash = (password) => {
    // implement genSalt method on bcrypt object. takes number of times to salt and callback
        // implement hash method of bcrypt object. takes password, salt from genSalt callback, and a callback
            //store hash in database 
// }
// const User = sequelize.define('user', {
//   // attributes
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING
//     // allowNull defaults to true
//   }
//  }, {
//   // options
//  });
 
//  User.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
//  });


//to check and see if sequilize is running
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('user', {
  // attributesss
  name: {
    type: Sequelize.STRING,
    unique: true,
    // allowNull defaults to true
  },
  email: {
    type: Sequelize.STRING
  },
 }, {
  // options
 });

//  const Session = sequelize.define('session', {
//    hash: {
//      type: Sequelize.STRING
//    }
//  });

 const Pets = sequelize.define('pets', {
   name: {
     type: Sequelize.STRING
   },
   type: {
     type: Sequelize.STRING
   },
   message: {
     type: Sequelize.STRING
   },
   image: {
     type: Sequelize.STRING(500)
   },
 });

 const Comments = sequelize.define('comments', {
   message: {
     type: Sequelize.STRING
   },
 })
 

//  Pets.hasOne(User, { foreignKey: 'petsId' });
//  Pets.belongsTo(User, {foreignKey: 'userId'});
 
//  User.sync({ force: true }).then(() => {
//    // Now the `users` table in the database corresponds to the model definition
   
//   });
  

  // Pets.sync({ force:true }).then(() => {
    
  // });
  
  

  module.exports.User = User;
  module.exports.Pets = Pets;
  module.exports.Comments = Comments;
// await client.connect()