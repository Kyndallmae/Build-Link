'use strict';

// Import the necessary packages from Sequelize
const { Model, DataTypes } = require('sequelize');

// Export the model definition function
module.exports = (sequelize, DataTypes) => {
    // Define the Subcontractor model that extends the Model class from Sequelize
    class Subcontractor extends Model {
        // Define associations (relationships) for the Subcontractor model
        static associate(models) {
            // A subcontractor is associated with a user
            this.belongsTo(models.User, {
                foreignKey: 'user_id' // This foreign key in the Subcontractor table points to the User table
            });

            // A subcontractor can apply for multiple job applications
            this.hasMany(models.Application, {
                foreignKey: 'subcontractor_id' // This foreign key in the Application table points to the Subcontractor table
            });
        }
    }

    // Initialize the Subcontractor model with its attributes and configurations
    Subcontractor.init({
        subcontractor_id: {  // Unique identifier for each subcontractor
            type: DataTypes.INTEGER,
            primaryKey: true,     // Indicates this is the primary key
            autoIncrement: true   // Automatically increments this value for new subcontractors
        },
        user_id: DataTypes.INTEGER,  // ID of the user associated with the subcontractor
        skills: DataTypes.TEXT,      // List or description of skills the subcontractor possesses
        certifications: DataTypes.TEXT // List or description of certifications the subcontractor holds
    }, {
        sequelize,     // Pass the sequelize instance to connect to the database
        modelName: 'Subcontractor', // Set the name of the model
    });

    // Return the defined Subcontractor model for use in other parts of the application
    return Subcontractor;
};
