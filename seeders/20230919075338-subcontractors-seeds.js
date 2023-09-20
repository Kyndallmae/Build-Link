'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subcontractors', [{
      user_id: 1,  // Assuming user with ID 1 exists
      skills: 'Web Development, Mobile Development',
      certifications: 'Full Stack Developer, Android Developer',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subcontractors', null, {});
  }
};
