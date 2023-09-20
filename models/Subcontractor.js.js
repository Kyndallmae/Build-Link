'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Subcontractor extends Model {
        static associate(models) {
            // Subcontractor belongs to a user
            this.belongsTo(models.User, {
                foreignKey: 'user_id'
            });

            // Subcontractor can apply for multiple jobs
            this.hasMany(models.Application, {
                foreignKey: 'subcontractor_id'
            });
        }
    }

    Subcontractor.init({
        subcontractor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: DataTypes.INTEGER,
        skills: DataTypes.TEXT,
        certifications: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Subcontractor',
    });

    return Subcontractor;
};
