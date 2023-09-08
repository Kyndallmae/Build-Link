-- Drop the database if it exists
-- This is like erasing a notebook if it already exists.
DROP DATABASE IF EXISTS construction_company_info_management;

-- Create the database
-- This is like creating a new empty notebook.
CREATE DATABASE construction_company_info_management;

-- Switch to the new database
-- This is like opening the notebook you just created so you can write inside it.
USE construction_company_info_management;

-- Create the Users Table
-- This is like making a table inside the notebook to write down information about people.
-- It has 7 columns, including a unique identifier, username, email, password, name, and contact information.
CREATE TABLE Users (
    user_id --A unique number for each person.
    INT AUTO_INCREMENT PRIMARY KEY,
    username --Their online name.
    VARCHAR(50) NOT NULL,
    email --Their email address
    VARCHAR(50) NOT NULL UNIQUE,
    password --Their secret code to log in
    VARCHAR(50) NOT NULL,
    name --Their real name.
    VARCHAR(50) NOT NULL,
    contact_info -- How to reach them.
    VARCHAR(50) NOT NULL,
);

-- Create the Contractors Table
-- This is like making another table in the notebook to write about companies.
-- It has 5 columns, including a unique identifier, user_id (linked to a person), company name, and address.
CREATE TABLE Contractors (
    contractor_id --A unique number for each company.
    INT AUTO_INCREMENT PRIMARY KEY,
    user_id --A number that shows which person is linked to this company.
    INT,
    company_name --The name of the company.
    VARCHAR(50) NOT NULL,
    address --Where the company is located.
    VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create the Subcontractors Table
-- This is like making a table for other workers.
-- It has 4 columns, including a unique identifier, user_id (linked to a person), skills, and certifications.
CREATE TABLE Subcontractors (
    subcontractor_id --A unique number for each worker.
    INT AUTO_INCREMENT PRIMARY KEY,
    user_id --A number that shows which person is linked to this worker.
    INT,
    skills --What the worker is good at.
    VARCHAR(50),
    certifications --Any special qualifications they have.
    VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create the Job Listings Table
-- This is like making a table to list job openings.
-- It has 13 columns, including a unique identifier, contractor_id (linked to a company), title, description, location, skills_required, budget, post_date, status, start_date, and deadline.
CREATE TABLE Job_Listings (
    job_id --A unique number for each job.INT AUTO_INCREMENT PRIMARY KEY,
    contractor_id --A number to show which company is offering the job.
    INT,
    title --The job title.
    VARCHAR(50) NOT NULL,
    description --Details about the job.
    TEXT,
    location --Where the job is.
    VARCHAR(50) NOT NULL,
    skills_required --What skills are needed.
    VARCHAR(50),
    budget --How much the job pays.
    DECIMAL(10, 3),
    post_date --When the job was posted.
    DATE,
    status --Whether the job is available or taken.
    VARCHAR(50),
    start_date --When the job starts.
    DATE,
    deadline --When you have to apply by.
    DATE, 
    FOREIGN KEY (contractor_id) REFERENCES Contractors(contractor_id)
);

-- Create the Applications Table
-- This is like making a table to keep track of job applications.
-- It has 5 columns, including a unique identifier, job_id (linked to a job), subcontractor_id (linked to a worker), application_date, and status.
CREATE TABLE Applications (
    application_id --A unique number for each application.
    INT AUTO_INCREMENT PRIMARY KEY,
    job_id --A number to show which job is applied for.
    INT,
    subcontractor_id --A number to show which worker applied.
    INT,
    application_date --When the application was sent.
    DATE,
    status --Whether the application is still being considered.
    VARCHAR(50),
    FOREIGN KEY (job_id) REFERENCES Job_Listings(job_id),
    FOREIGN KEY (subcontractor_id) REFERENCES Subcontractors(subcontractor_id)
);

-- Create the Messages Table
-- This is like making a table to store messages between people.
-- It has 6 columns, including a unique identifier, sender_id (linked to a user), receiver_id (linked to a user), message_content, and timestamp.
CREATE TABLE Messages (
    message_id --A unique number for each message.
    INT AUTO_INCREMENT PRIMARY KEY,
    sender_id --A number to show who sent the message.
    INT,
    receiver_id --A number to show who received the message.
    INT,
    message_content --What the message says.
    TEXT,
    timestamp --When the message was sent.
    DATETIME,
    FOREIGN KEY (sender_id) REFERENCES Users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES Users(user_id)
);
