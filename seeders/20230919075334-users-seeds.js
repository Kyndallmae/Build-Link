'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'john_doe',
      email: 'john.doe@example.com',
      name: 'John Doe',
      contact_info: '123-456-7890',
      password: 'securepassword123',
      createdAt: new Date(),  
      updatedAt: new Date()  
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
