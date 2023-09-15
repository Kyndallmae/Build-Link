// seed-applications.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Applications', [{
      job_id: 1,
      subcontractor_id: 1,
      application_date: new Date(),
      status: 'Sample Status',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Applications', null, {});
  }
};
