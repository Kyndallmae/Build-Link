'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Applications', [{
      job_id: 1,  // Assuming job with ID 1 exists
      subcontractor_id: 1,  // Assuming subcontractor with ID 1 exists
      application_date: new Date(),
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Applications', null, {});
  }
};
