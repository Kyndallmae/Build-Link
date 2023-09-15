// models/subcontractor.js
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Subcontractor extends Model {}

    Subcontractor.init({
        subcontractor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: DataTypes.INTEGER,
        skills: DataTypes.STRING,
        certifications: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Subcontractor',
    });

    return Subcontractor;
};
