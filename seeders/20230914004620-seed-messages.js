// seed-messages.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Messages', [{
      sender_id: 1,
      receiver_id: 1,
      message_content: 'Sample Message Content',
      timestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface,
