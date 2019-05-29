const Sequelize = require('sequelize');

const sequelize = new Sequelize('Paws', 'root', '', {
  host: '142.93.192.110',
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