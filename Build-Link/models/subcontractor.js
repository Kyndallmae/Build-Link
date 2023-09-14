'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcontractor extends Model {
    static associate(models) {
      Subcontractor.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Subcontractor.hasMany(models.Application, {
        foreignKey: 'subcontractor_id'
      });
    }
  }
  Subcontractor.init({
    user_id: DataTypes.INTEGER,
    skills: DataTypes.STRING,
    certifications: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subcontractor',
  });
  return Subcontractor;
};
