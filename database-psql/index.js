const Sequelize = require('sequelize');

const sequelize = new Sequelize('Paws', '', '', {
  host: 'localhost',
  dialect: 'postgres'
});

//to check and see if sequilize is running
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });