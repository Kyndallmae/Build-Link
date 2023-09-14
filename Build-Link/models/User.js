'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Contractor, {
        foreignKey: 'user_id'
      });
      User.hasOne(models.Subcontractor, {
        foreignKey: 'user_id'
      });
      User.hasMany(models.Message, {
        as: 'sentMessages',
        foreignKey: 'sender_id'
      });
      User.hasMany(models.Message, {
        as: 'receivedMessages',
        foreignKey: 'receiver_id'
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    contact_info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
