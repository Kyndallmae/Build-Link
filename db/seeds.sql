-- Insert sample data into the Users table
INSERT INTO Users (username, email, password, name, contact_info)
VALUES
    ('contractor1', 'contractor1@example.com', 'password123', 'Contractor One', '123-456-7890'),
    ('contractor2', 'contractor2@example.com', 'password456', 'Contractor Two', '987-654-3210'),
    ('subcontractor1', 'subcontractor1@example.com', 'password789', 'Subcontractor One', '555-555-5555'),
    ('subcontractor2', 'subcontractor2@example.com', 'passwordabc', 'Subcontractor Two', '111-111-1111');

-- Insert sample data into the Contractors table
INSERT INTO Contractors (user_id, company_name, address)
VALUES
    (1, 'Contractor Company A', '123 Main St, City A, State A'),
    (2, 'Contractor Company B', '456 Elm St, City B, State B');

-- Insert sample data into the Subcontractors table
INSERT INTO Subcontractors (user_id, skills, certifications)
VALUES
    (3, 'Carpentry, Plumbing', 'Certified Plumber'),
    (4, 'Electrical, HVAC', 'Certified Electrician');

-- Insert sample data into the Job_Listings table
INSERT INTO Job_Listings (contractor_id, title, description, location, skills_required, budget, post_date, status, start_date, deadline)
VALUES
    (1, 'Project A', 'Description for Project A', 'City A, State A', 'Carpentry, Plumbing', 5000.00, '2023-09-07', 'Open', '2023-10-01', '2023-11-01'),
    (2, 'Project B', 'Description for Project B', 'City B, State B', 'Electrical, HVAC', 7500.00, '2023-09-07', 'Open', '2023-10-15', '2023-11-15');

-- Insert sample data into the Applications table
INSERT INTO Applications (job_id, subcontractor_id, application_date, status)
VALUES
    (1, 3, '2023-09-08', 'Pending'),
    (2, 4, '2023-09-09', 'Accepted');

-- Insert sample data into the Messages table
INSERT INTO Messages (sender_id, receiver_id, message_content, timestamp)
VALUES
    (1, 3, 'Hello Subcontractor One, I have a project for you.', '2023-09-10 10:00:00'),
    (3, 1, 'Sure, I\'m interested. Tell me more.', '2023-09-10 10:15:00');
