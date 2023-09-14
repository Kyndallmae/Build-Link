'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobListing.init({
    job_id: DataTypes.INTEGER,
    contractor_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    skills_required: DataTypes.STRING,
    budget: DataTypes.DECIMAL,
    post_date: DataTypes.DATE,
    status: DataTypes.STRING,
    start_date: DataTypes.DATE,
    deadline: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'JobListing',
  });
  return JobListing;
};