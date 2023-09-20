const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,

    // Pool settings for database connections
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // SQLite only
    // storage: process.env.DB_STORAGE_PATH // Uncomment this if you're using SQLite and add DB_STORAGE_PATH to .env
});

// Function to test the connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// You can call the testConnection function to check the connection when the app starts
// testConnection();

module.exports = sequelize;
