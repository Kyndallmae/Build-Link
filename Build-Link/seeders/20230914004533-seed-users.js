// seed-users.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'sampleUser',
      email: 'sample@email.com',
      password: 'sampleHashedPassword',
      name: 'Sample Name',
      contact_info: 'Sample Contact Info',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
