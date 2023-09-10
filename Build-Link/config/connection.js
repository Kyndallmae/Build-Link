// Import Sequelize library
const Sequelize = require('sequelize');

// Import dotenv library for environment variables
require('dotenv').config();

// Declare sequelize variable
let sequelize;

// Check for JAWSDB_URL environment variable
if (process.env.JAWSDB_URL) {
  // Create Sequelize instance using JAWSDB_URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Create Sequelize instance using local database credentials
  sequelize = new Sequelize(
    process.env.construction_company_info_management,       // Database name
    process.env.root,       // Database username
    process.env.qaxJew-9bepze-widmuv,   // Database password
    {
      host: 'localhost',       // Database host (local)
      dialect: 'mysql',        // Database dialect (MySQL)
      port: 3306               // Database port
    }
  );
}

// Export Sequelize instance
module.exports = sequelize;
