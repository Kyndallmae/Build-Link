'use strict';

// Import the Model class from sequelize
const { Model } = require('sequelize');

// Define the User model
module.exports = (sequelize, DataTypes) => {
  // Extend the Model class to create the User model
  class User extends Model {
    // Define associations with other models
    static associate(models) {
      // User has one Contractor associated with it using the foreign key 'user_id'
      User.hasOne(models.Contractor, { foreignKey: 'user_id' });
      // User has one Subcontractor associated with it using the foreign key 'user_id'
      User.hasOne(models.Subcontractor, { foreignKey: 'user_id' });
      // User has many Messages associated with it as the sender using the foreign key 'sender_id'
      User.hasMany(models.Message, { foreignKey: 'sender_id' });
      // User has many Messages associated with it as the receiver using the foreign key 'receiver_id'
      User.hasMany(models.Message, { foreignKey: 'receiver_id' });
    }
  }

  // Initialize the User model with its attributes and options
  User.init({
    // Define the primary key as 'user_id' which is an auto-incremented integer
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // Define the 'username' attribute as a string
    username: DataTypes.STRING,
    // Define the 'email' attribute as a string
    email: DataTypes.STRING,
    // Define the 'password' attribute as a string
    password: DataTypes.STRING,
    // Define the 'name' attribute as a string
    name: DataTypes.STRING,
    // Define the 'contact_info' attribute as a string
    contact_info: DataTypes.STRING
  }, {
    sequelize, // Connect to the provided Sequelize instance
    modelName: 'User', // Set the model name as 'User'
  });

  // Return the User model
  return User;
};
