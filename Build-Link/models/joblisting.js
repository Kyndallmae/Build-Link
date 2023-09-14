'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    static associate(models) {
      JobListing.belongsTo(models.Contractor, {
        foreignKey: 'contractor_id'
      });
      JobListing.hasMany(models.Application, {
        foreignKey: 'job_id'
      });
    }
  }
  JobListing.init({
    contractor_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    skills_required: DataTypes.STRING,
    budget: DataTypes.DECIMAL(10, 3),
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
