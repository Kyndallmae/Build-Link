// models/message.js
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Message extends Model {}

    Message.init({
        message_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
