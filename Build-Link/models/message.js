'use strict';

// Import the Model class from sequelize
const { Model } = require('sequelize');

// Define the Message model
module.exports = (sequelize, DataTypes) => {
  // Extend the Model class to create the Message model
  class Message extends Model {
    // Define associations with other models
    static associate(models) {
      // Message belongs to a User as the sender with a foreign key 'sender_id'
      Message.belongsTo(models.User, { foreignKey: 'sender_id' });
      // Message belongs to a User as the receiver with a foreign key 'receiver_id'
      Message.belongsTo(models.User, { foreignKey: 'receiver_id' });
    }
  }

  // Initialize the Message model with its attributes and options
  Message.init({
    // Define the primary key as 'message_id' which is an auto-incremented integer
    message_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // Define the 'sender_id' attribute as an integer
    sender_id: DataTypes.INTEGER,
    // Define the 'receiver_id' attribute as an integer
    receiver_id: DataTypes.INTEGER,
    // Define the 'message_content' attribute as text
    message_content: DataTypes.TEXT,
    // Define the 'timestamp' attribute as a date
    timestamp: DataTypes.DATE
  }, {
    sequelize, // Connect to the provided Sequelize instance
    modelName: 'Message', // Set the model name as 'Message'
  });

  // Return the Message model
  return Message;
};
