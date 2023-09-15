'use strict';

// Import the Model class from sequelize
const { Model } = require('sequelize');

// Define the JobListing model
module.exports = (sequelize, DataTypes) => {
  // Extend the Model class to create the JobListing model
  class JobListing extends Model {
    // Define associations with other models
    static associate(models) {
      // JobListing belongs to a Contractor with a foreign key 'contractor_id'
      JobListing.belongsTo(models.Contractor, { foreignKey: 'contractor_id' });
      // JobListing has many Applications with a foreign key 'job_id'
      JobListing.hasMany(models.Application, { foreignKey: 'job_id' });
    }
  }

  // Initialize the JobListing model with its attributes and options
  JobListing.init({
    // Define the primary key as 'job_id' which is an auto-incremented integer
    job_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // Define the 'contractor_id' attribute as an integer
    contractor_id: DataTypes.INTEGER,
    // Define the 'title' attribute as a string
    title: DataTypes.STRING,
    // Define the 'description' attribute as a text
    description: DataTypes.TEXT,
    // Define the 'location' attribute as a string
    location: DataTypes.STRING,
    // Define the 'skills_required' attribute as a string
    skills_required: DataTypes.STRING,
    // Define the 'budget' attribute as a decimal with precision and scale
    budget: DataTypes.DECIMAL(10, 3),
    // Define the 'post_date' attribute as a date
    post_date: DataTypes.DATE,
    // Define the 'status' attribute as a string
    status: DataTypes.STRING,
    // Define the 'start_date' attribute as a date
    start_date: DataTypes.DATE,
    // Define the 'deadline' attribute as a date
    deadline: DataTypes.DATE
  }, {
    sequelize, // Connect to the provided Sequelize instance
    modelName: 'JobListing', // Set the model name as 'JobListing'
  });

  // Return the JobListing model
  return JobListing;
};
