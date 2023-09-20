'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Contractor extends Model {
        static associate(models) {
            // Contractor belongs to a user
            this.belongsTo(models.User, {
                foreignKey: 'user_id'
            });

            // Contractor can post multiple job listings
            this.hasMany(models.JobListing, {
                foreignKey: 'contractor_id'
            });
        }
    }

    Contractor.init({
        contractor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: DataTypes.INTEGER,
        company_name: DataTypes.STRING,
        address: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Contractor',
    });

    return Contractor;
};
