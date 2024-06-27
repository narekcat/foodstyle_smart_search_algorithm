const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'mysecretpassword', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;