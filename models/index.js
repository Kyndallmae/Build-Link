'use strict';

const { Sequelize } = require('sequelize');
const dbConfig = require('../config/config.json'); 

// Determine the current environment
const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

// Initialize Sequelize with the specified environment configuration
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Import models
const Application = require('./application')(sequelize, Sequelize.DataTypes);
const Contractor = require('./contractor')(sequelize, Sequelize.DataTypes);
const JobListing = require('./joblisting')(sequelize, Sequelize.DataTypes);
const Message = require('./message')(sequelize, Sequelize.DataTypes);
const Subcontractor = require('./subcontractor')(sequelize, Sequelize.DataTypes);
const User = require('./user')(sequelize, Sequelize.DataTypes);

// Export models and Sequelize for seed and other uses
module.exports = {
  sequelize,
  Sequelize,
  Application,
  Contractor,
  JobListing,
  Message,
  Subcontractor,
  User,
};
