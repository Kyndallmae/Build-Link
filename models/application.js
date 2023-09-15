'use strict';

// Import the Model class from sequelize
const { Model } = require('sequelize');

// Define the Application model
module.exports = (sequelize, DataTypes) => {
  // Extend the Model class to create the Application model
  class Application extends Model {
    // Define associations with other models
    static associate(models) {
      // Application belongs to a JobListing with a foreign key 'job_id'
      Application.belongsTo(models.JobListing, { foreignKey: 'job_id' });
      // Application belongs to a Subcontractor with a foreign key 'subcontractor_id'
      Application.belongsTo(models.Subcontractor, { foreignKey: 'subcontractor_id' });
    }
  }

  // Initialize the Application model with its attributes and options
  Application.init({
    // Define the primary key as 'application_id' which is an auto-incremented integer
    application_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // Define the 'job_id' attribute as an integer
    job_id: DataTypes.INTEGER,
    // Define the 'subcontractor_id' attribute as an integer
    subcontractor_id: DataTypes.INTEGER,
    // Define the 'application_date' attribute as a date
    application_date: DataTypes.DATE,
    // Define the 'status' attribute as a string
    status: DataTypes.STRING
  }, {
    sequelize, // Connect to the provided Sequelize instance
    modelName: 'Application', // Set the model name as 'Application'
  });

  // Return the Application model
  return Application;
};
