'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, {
        as: 'sender',
        foreignKey: 'sender_id'
      });
      Message.belongsTo(models.User, {
        as: 'receiver',
        foreignKey: 'receiver_id'
      });
    }
  }
  Message.init({
    sender_id: DataTypes.INTEGER,
    receiver_id: DataTypes.INTEGER,
    message_content: DataTypes.TEXT,
    timestamp: DataTypes.DATETIME
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
