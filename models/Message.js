'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Message extends Model {
        static associate(models) {
            // A message has a sender (User)
            this.belongsTo(models.User, {
                foreignKey: 'sender_id'
            });

            // A message has a receiver (User)
            this.belongsTo(models.User, {
                foreignKey: 'receiver_id'
            });
        }
    }

    Message.init({
        message_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sender_id: DataTypes.INTEGER,
        receiver_id: DataTypes.INTEGER,
        message_content: DataTypes.TEXT,
        timestamp: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Message',
    });

    return Message;
};
