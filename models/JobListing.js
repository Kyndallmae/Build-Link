'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class JobListing extends Model {
        static associate(models) {
            // JobListing belongs to a contractor
            this.belongsTo(models.Contractor, {
                foreignKey: 'contractor_id'
            });

            // JobListing can have multiple applications
            this.hasMany(models.Application, {
                foreignKey: 'job_id'
            });
        }
    }

    JobListing.init({
        job_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contractor_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        location: DataTypes.STRING,
        skills_required: DataTypes.TEXT,
        budget: DataTypes.INTEGER,
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
