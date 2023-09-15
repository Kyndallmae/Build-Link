// seed-contractors.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contractors', [{
      user_id: 1,
      company_name: 'Sample Company',
      address: 'Sample Address',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contractors', null, {});
  }
};
