// Import the JobListing model from the models directory.
const { JobListing } = require('../models/JobListing.js');

// Function to create a new job listing.
exports.create = async (req, res) => {
    try {
        // Create a new job listing using data from the request body.
        const jobListing = await JobListing.create(req.body);
        // Respond with a 201 status and the created job listing.
        res.status(201).send(jobListing);
    } catch (error) {
        // If there's an error, respond with a 500 status and an error message.
        res.status(500).send({ message: "Error creating job listing." });
    }
};

// Function to retrieve all job listings.
exports.findAll = async (req, res) => {
    try {
        // Fetch all job listings.
        const jobListings = await JobListing.findAll();
        // Respond with a 200 status and the fetched job listings.
        res.status(200).send(jobListings);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving job listings." });
    }
};

// Function to retrieve a specific job listing by its ID.
exports.findById = async (req, res) => {
    try {
        // Fetch a job listing by its primary key.
        const jobListing = await JobListing.findByPk(req.params.jobListingId);
        // If the job listing is not found, respond with a 404 status and an error message.
        if (!jobListing) {
            return res.status(404).send({ message: "Job listing not found." });
        }
        // Respond with a 200 status and the fetched job listing.
        res.status(200).send(jobListing);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving job listing." });
    }
};

// Function to update a specific job listing.
exports.update = async (req, res) => {
    try {
        // Update a job listing based on its ID and the data from the request body.
        const updated = await JobListing.update(req.body, { where: { job_listing_id: req.params.jobListingId } });
        // If no job listing was updated, respond with a 404 status and an error message.
        if (updated[0] === 0) {
            return res.status(404).send({ message: "Job listing not found or no changes made." });
        }
        // Respond with a 200 status and a success message.
        res.status(200).send({ message: "Job listing updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating job listing." });
    }
};

// Function to delete a specific job listing.
exports.delete = async (req, res) => {
    try {
        // Delete a job listing based on its ID.
        const deleted = await JobListing.destroy({ where: { job_listing_id: req.params.jobListingId } });
        // If no job listing was deleted, respond with a 404 status and an error message.
        if (deleted === 0) {
            return res.status(404).send({ message: "Job listing not found." });
        }
        // Respond with a 200 status and a success message.
        res.status(200).send({ message: "Job listing deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting job listing." });
    }
};
