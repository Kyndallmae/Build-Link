'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // User has one contractor profile
            this.hasOne(models.Contractor, {
                foreignKey: 'user_id',
                onDelete: 'CASCADE'
            });

            // User has one subcontractor profile
            this.hasOne(models.Subcontractor, {
                foreignKey: 'user_id',
                onDelete: 'CASCADE'
            });

            // User can send multiple messages
            this.hasMany(models.Message, {
                foreignKey: 'sender_id'
            });

            // User can receive multiple messages
            this.hasMany(models.Message, {
                foreignKey: 'receiver_id'
            });
        }
    }

    User.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        name: DataTypes.STRING,
        contact_info: DataTypes.TEXT,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });

    return User;
};
