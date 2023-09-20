'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Messages', [{
      sender_id: 1,  // Assuming user with ID 1 exists as sender
      receiver_id: 2,  // Assuming user with ID 2 exists as receiver
      message_content: 'Hello! How are you?',
      timestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
