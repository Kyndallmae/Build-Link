// models/application.js
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Application extends Model {}

    Application.init({
        application_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        job_id: DataTypes.INTEGER,
        subcontractor_id: DataTypes.INTEGER,
        application_date: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Application',
    });

    return Application;
};
