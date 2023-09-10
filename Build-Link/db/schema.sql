/* Drop the database if it exists */
/* This is like erasing a notebook if it already exists. */
DROP DATABASE IF EXISTS Build_Link;

/* Create the database */
/* This is like creating a new empty notebook. */
CREATE DATABASE Build_Link;

/* Switch to the new database */
/* This is like opening the notebook you just created so you can write inside it. */
USE Build_Link;

/* Create the Users Table */
/* This is like making a table inside the notebook to write down information about people. */
/* It has 6 columns, including a unique identifier, username, email, password, name, and contact information. */
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY, /* A unique number for each person. */
    username VARCHAR(50) NOT NULL, /* Their online name. */
    email VARCHAR(50) NOT NULL UNIQUE, /* Their email address */
    password VARCHAR(50) NOT NULL, /* Their secret code to log in */
    name VARCHAR(50) NOT NULL, /* Their real name. */
    contact_info VARCHAR(50) NOT NULL /* How to reach them. */
);

/* Create the Contractors Table */
/* This is like making another table in the notebook to write about companies. */
/* It has 4 columns, including a unique identifier, user_id (linked to a person), company name, and address. */
CREATE TABLE Contractors (
    contractor_id INT AUTO_INCREMENT PRIMARY KEY, /* A unique number for each company. */
    user_id INT, /* A number that shows which person is linked to this company. */
    company_name VARCHAR(50) NOT NULL, /* The name of the company. */
    address VARCHAR(50) NOT NULL, /* Where the company is located. */
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

/* Create the Subcontractors Table */
/* This is like making a table for other workers. */
/* It has 4 columns, including a unique identifier, user_id (linked to a person), skills, and certifications. */
CREATE TABLE Subcontractors (
    subcontractor_id INT AUTO_INCREMENT PRIMARY KEY, /* A unique number for each worker. */
    user_id INT, /* A number that shows which person is linked to this worker. */
    skills VARCHAR(50), /* What the worker is good at. */
    certifications VARCHAR(50), /* Any special qualifications they have. */
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

/* Create the Job Listings Table */
/* This is like making a table to list job openings. */
/* It has 11 columns, including a unique identifier, contractor_id (linked to a company), title, description, location, skills_required, budget, post_date, status, start_date, and deadline. */
CREATE TABLE Job_Listings (
    job_id INT AUTO_INCREMENT PRIMARY KEY, /* A unique number for each job. */
    contractor_id INT, /* A number to show which company is offering the job. */
    title VARCHAR(50) NOT NULL, /* The job title. */
    description TEXT, /* Details about the job. */
    location VARCHAR(50) NOT NULL, /* Where the job is. */
    skills_required VARCHAR(50), /* What skills are needed. */
    budget DECIMAL(10, 3), /* How much the job pays. */
    post_date DATE, /* When the job was posted. */
    status VARCHAR(50), /* Whether the job is available or taken. */
    start_date DATE, /* When the job starts. */
    deadline DATE, /* When you have to apply by. */
    FOREIGN KEY (contractor_id) REFERENCES Contractors(contractor_id)
);

/* Create the Applications Table */
/* This is like making a table to keep track of job applications. */
/* It has 5 columns, including a unique identifier, job_id (linked to a job), subcontractor_id (linked to a worker), application_date, and status. */
CREATE TABLE Applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY, /* A unique number for each application. */
    job_id INT, /* A number to show which job is applied for. */
    subcontractor_id INT, /* A number to show which worker applied. */
    application_date DATE, /* When the application was sent. */
    status VARCHAR(50), /* Whether the application is still being considered. */
    FOREIGN KEY (job_id) REFERENCES Job_Listings(job_id),
    FOREIGN KEY (subcontractor_id) REFERENCES Subcontractors(subcontractor_id)
);

/* Create the Messages Table */
/* This is like making a table to store messages between people. */
/* It has 5 columns, including a unique identifier, sender_id (linked to a user), receiver_id (linked to a user), message_content, and timestamp. */
CREATE TABLE Messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY, /* A unique number for each message. */
    sender_id INT, /* A number to show who sent the message. */
    receiver_id INT, /* A number to show who received the message. */
    message_content TEXT, /* What the message says. */
    timestamp DATETIME, /* When the message was sent. */
    FOREIGN KEY (sender_id) REFERENCES Users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES Users(user_id)
);
