'use strict';

// Import the Model class from sequelize
const { Model } = require('sequelize');

// Define the Subcontractor model
module.exports = (sequelize, DataTypes) => {
  // Extend the Model class to create the Subcontractor model
  class Subcontractor extends Model {
    // Define associations with other models
    static associate(models) {
      // Subcontractor belongs to a User with a foreign key 'user_id'
      Subcontractor.belongsTo(models.User, { foreignKey: 'user_id' });
      // Subcontractor has many Applications with a foreign key 'subcontractor_id'
      Subcontractor.hasMany(models.Application, { foreignKey: 'subcontractor_id' });
    }
  }

  // Initialize the Subcontractor model with its attributes and options
  Subcontractor.init({
    // Define the primary key as 'subcontractor_id' which is an auto-incremented integer
    subcontractor_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // Define the 'user_id' attribute as an integer
    user_id: DataTypes.INTEGER,
    // Define the 'skills' attribute as a string
    skills: DataTypes.STRING,
    // Define the 'certifications' attribute as a string
    certifications: DataTypes.STRING
  }, {
    sequelize, // Connect to the provided Sequelize instance
    modelName: 'Subcontractor', // Set the model name as 'Subcontractor'
  });

  // Return the Subcontractor model
  return Subcontractor;
};
