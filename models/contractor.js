// models/contractor.js
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Contractor extends Model {}

    Contractor.init({
        contractor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
