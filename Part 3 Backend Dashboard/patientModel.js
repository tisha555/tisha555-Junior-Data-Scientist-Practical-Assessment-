const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Patient model
const Patient = sequelize.define('Patient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  gender: {
    type: DataTypes.STRING,
  },
  diagnosis: {
    type: DataTypes.STRING,
  },
  admission_date: {
    type: DataTypes.DATE,
  },
});

module.exports = Patient;
