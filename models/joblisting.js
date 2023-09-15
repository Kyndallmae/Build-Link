// models/joblisting.js
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class JobListing extends Model {}

    JobListing.init({
        job_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        contractor_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        location: DataTypes.STRING,
        skills_required: DataTypes.STRING,
        budget: DataTypes.FLOAT,
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
