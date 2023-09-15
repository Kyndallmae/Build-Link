// seed-job-listings.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('JobListings', [{
      contractor_id: 1,
      title: 'Sample Job Title',
      description: 'Sample Job Description',
      location: 'Sample Location',
      skills_required: 'Sample Skills Required',
      budget: 1234.567,
      post_date: new Date(),
      status: 'Sample Status',
      start_date: new Date(),
      deadline: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('JobListings', null, {});
  }
};
