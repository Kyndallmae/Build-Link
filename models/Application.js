'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Application extends Model {
        static associate(models) {
            // Application belongs to a job listing
            this.belongsTo(models.JobListing, {
                foreignKey: 'job_id'
            });

            // Application is made by a subcontractor
            this.belongsTo(models.Subcontractor, {
                foreignKey: 'subcontractor_id'
            });
        }
    }

    Application.init({
        application_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
