const { Sequelize } = require('sequelize');

// Setup the connection to MySQL/PostgreSQL
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Use 'postgres' for PostgreSQL
});

module.exports = sequelize;
