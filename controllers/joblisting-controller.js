// Import the 'db' object for database operations
const db = require('../models');

// Get all job listings
exports.getAllJobListings = async (req, res) => {
    try {
        // Retrieve all job listings from the database
        const jobs = await db.JobListing.findAll();
        // Respond with a JSON array of job listings and a 200 status code
        res.status(200).json(jobs);
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Get a job listing by its ID
exports.getJobListingById = async (req, res) => {
    try {
        // Find a job listing by its primary key (ID)
        const job = await db.JobListing.findByPk(req.params.id);
        if (job) {
            // If the job listing is found, respond with it and a 200 status code
            res.status(200).json(job);
        } else {
            // If the job listing is not found, respond with a 404 status code and an error message
            res.status(404).json({ error: "Job not found" });
        }
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Create a new job listing
exports.createJobListing = async (req, res) => {
    try {
        // Create a new job listing in the database based on the request body
        const newJob = await db.JobListing.create(req.body);
        // Respond with the newly created job listing and a 201 status code (resource created)
        res.status(201).json(newJob);
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Update an existing job listing
exports.updateJobListing = async (req, res) => {
    try {
        // Update a job listing in the database based on the provided ID
        await db.JobListing.update(req.body, {
            where: { job_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Job listing updated successfully" });
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Delete a job listing by its ID
exports.deleteJobListing = async (req, res) => {
    try {
        // Delete a job listing from the database based on the provided ID
        await db.JobListing.destroy({
            where: { job_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Job listing deleted successfully" });
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};
