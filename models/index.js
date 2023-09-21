const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js'); 

// Importing models as functions and calling them immediately
const Application = require('./Application')(sequelize, Sequelize.DataTypes);
const JobListing = require('./JobListing')(sequelize, Sequelize.DataTypes);
const Subcontractor = require('./Subcontractor')(sequelize, Sequelize.DataTypes);
const Contractor = require('./Contractor')(sequelize, Sequelize.DataTypes);
const Message = require('./Message')(sequelize, Sequelize.DataTypes);
const User = require('./User')(sequelize, Sequelize.DataTypes);

const models = {
    Application,
    JobListing,
    Subcontractor,
    Contractor,
    Message,
    User
};

// Associate the models
for (const model of Object.values(models)) {
    if (typeof model.associate === 'function') {
        model.associate(models);
    }
}

module.exports = models;
