-- Drop the database if it exists
DROP DATABASE IF EXISTS construction_company_info_management;

-- Create the database
CREATE DATABASE construction_company_info_management;

-- Switch to the new database
USE construction_company_info_management;

-- Create the Users Table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    -- Add other user profile fields here (e.g., name, contact information)
    name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255) NOT NULL,
);

-- Create the Contractors Table
CREATE TABLE Contractors (
    contractor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    -- Add contractor-specific fields here (e.g., company name, address)
    company_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create the Subcontractors Table
CREATE TABLE Subcontractors (
    subcontractor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    -- Add subcontractor-specific fields here (e.g., skills, certifications)
    skills VARCHAR(255),
    certifications VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create the Job Listings Table
CREATE TABLE Job_Listings (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    contractor_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255) NOT NULL,
    skills_required VARCHAR(255),
    budget DECIMAL(10, 2),
    post_date DATE,
    status VARCHAR(50),
    start_date DATE,
    deadline DATE,  -- Added deadline field as per user story
    FOREIGN KEY (contractor_id) REFERENCES Contractors(contractor_id)
);

-- Create the Applications Table
CREATE TABLE Applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT,
    subcontractor_id INT,
    application_date DATE,
    status VARCHAR(50),
    FOREIGN KEY (job_id) REFERENCES Job_Listings(job_id),
    FOREIGN KEY (subcontractor_id) REFERENCES Subcontractors(subcontractor_id)
);

-- Create the Messages Table
CREATE TABLE Messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    message_content TEXT,
    timestamp DATETIME,
    FOREIGN KEY (sender_id) REFERENCES Users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES Users(user_id)
);
