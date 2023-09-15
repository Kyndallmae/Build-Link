// seed-subcontractors.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Subcontractors', [{
      user_id: 1,
      skills: 'Sample Skills',
      certifications: 'Sample Certifications',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subcontractors', null, {});
  }
};
