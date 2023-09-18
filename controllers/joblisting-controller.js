const { validationResult } = require('express-validator');
const db = require('../models');

// Get all job listings
exports.getAllJobListings = async (req, res) => {
    try {
        const jobs = await db.JobListing.findAll();
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a job listing by its ID
exports.getJobListingById = async (req, res) => {
    try {
        const job = await db.JobListing.findByPk(req.params.id);
        if (job) {
            res.status(200).json(job);
        } else {
            res.status(404).json({ error: "Job not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new job listing
exports.createJobListing = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newJob = await db.JobListing.create(req.body);
        res.status(201).json(newJob);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an existing job listing
exports.updateJobListing = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await db.JobListing.update(req.body, {
            where: { job_id: req.params.id }
        });
        res.status(200).json({ message: "Job listing updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a job listing by its ID
exports.deleteJobListing = async (req, res) => {
    try {
        await db.JobListing.destroy({
            where: { job_id: req.params.id }
        });
        res.status(200).json({ message: "Job listing deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
