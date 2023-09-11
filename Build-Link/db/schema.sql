/* Step 1: Create Database */

/* Drop the database if it exists */
DROP DATABASE IF EXISTS Build_Link;

/* Create the database */
CREATE DATABASE Build_Link;

/* Switch to the new database */
USE Build_Link;

/* Step 2: Create Tables */

/* Create the Users Table */
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    contact_info VARCHAR(50) NOT NULL
);

/* Create the Contractors Table */
CREATE TABLE Contractors (
    contractor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    company_name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

/* Create the Subcontractors Table */
CREATE TABLE Subcontractors (
    subcontractor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    skills VARCHAR(50),
    certifications VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

/* Create the Job Listings Table */
CREATE TABLE Job_Listings (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    contractor_id INT,
    title VARCHAR(50) NOT NULL,
    description TEXT,
    location VARCHAR(50) NOT NULL,
    skills_required VARCHAR(50),
    budget DECIMAL(10, 3),
    post_date DATE,
    status VARCHAR(50),
    start_date DATE,
    deadline DATE,
    FOREIGN KEY (contractor_id) REFERENCES Contractors(contractor_id)
);

/* Create the Applications Table */
CREATE TABLE Applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT,
    subcontractor_id INT,
    application_date DATE,
    status VARCHAR(50),
    FOREIGN KEY (job_id) REFERENCES Job_Listings(job_id),
    FOREIGN KEY (subcontractor_id) REFERENCES Subcontractors(subcontractor_id)
);

/* Create the Messages Table */
CREATE TABLE Messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    message_content TEXT,
    timestamp DATETIME,
    FOREIGN KEY (sender_id) REFERENCES Users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES Users(user_id)
);

