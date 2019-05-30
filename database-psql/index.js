const Sequelize = require('sequelize');


const sequelize = new Sequelize('Paws', 'root', 'orangetrainfalcon', {
  host: 'paws.cykfkgwxg7am.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',
});

//test
// to check and see if sequilize is running
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });