// models/user.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Contractor, { foreignKey: 'user_id' });
      User.hasOne(models.Subcontractor, { foreignKey: 'user_id' });
      User.hasMany(models.Message, { foreignKey: 'sender_id' });
      User.hasMany(models.Message, { foreignKey: 'receiver_id' });
    }
  }
  User.init({
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
