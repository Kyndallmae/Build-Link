'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcontractor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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