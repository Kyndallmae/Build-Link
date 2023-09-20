'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JobListings', [{
      contractor_id: 1,  // Assuming contractor with ID 1 exists
      title: 'Plumbing Work Required',
      description: 'We need plumbing services for a new building.',
      location: '456 Avenue, City',
      skills_required: 'Plumbing, Piping, Leak detection',
      budget: 5000,
      post_date: new Date(),
      status: 'Open',
      start_date: new Date(),
      deadline: new Date(new Date().setDate(new Date().getDate() + 30)),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JobListings', null, {});
  }
};
