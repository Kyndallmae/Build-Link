// models/contractor.js
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Contractor extends Model {
        static associate(models) {
            Contractor.belongsTo(models.User, { foreignKey: 'user_id' });
            Contractor.hasMany(models.JobListing, { foreignKey: 'contractor_id' });
        }
    }
  
    Contractor.init({
        contractor_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: DataTypes.INTEGER,
        company_name: DataTypes.STRING,
        address: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Contractor',
    });

    return Contractor;
};
