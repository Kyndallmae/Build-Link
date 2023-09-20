'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contractors', [{
      user_id: 1,  // Assuming user with ID 1 exists
      company_name: 'ABC Constructions',
      address: '123 Street, City',
      createdAt: new Date(),  
      updatedAt: new Date()  
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contractors', null, {});
  }
};
