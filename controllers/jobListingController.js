const { JobListing } = require('../models/JobListing.js');

exports.create = async (req, res) => {
        try {
        const jobListing = await JobListing.create(req.body);
        res.status(201).send(jobListing);
    } catch (error) {
        res.status(500).send({ message: "Error creating job listing." });
    }
};

exports.findAll = async (req, res) => {
        try {
        const jobListings = await JobListing.findAll();
        res.status(200).send(jobListings);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving job listings." });
    }
};

exports.findById = async (req, res) => {
        try {
        const jobListing = await JobListing.findByPk(req.params.jobListingId);
        if (!jobListing) {
            return res.status(404).send({ message: "Job listing not found." });
        }
        res.status(200).send(jobListing);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving job listing." });
    }
};

exports.update = async (req, res) => {
        try {
        const updated = await JobListing.update(req.body, { where: { job_listing_id: req.params.jobListingId } });
        if (updated[0] === 0) {
            return res.status(404).send({ message: "Job listing not found or no changes made." });
        }
        res.status(200).send({ message: "Job listing updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating job listing." });
    }
};

exports.delete = async (req, res) => {
        try {
        const deleted = await JobListing.destroy({ where: { job_listing_id: req.params.jobListingId } });
        if (deleted === 0) {
            return res.status(404).send({ message: "Job listing not found." });
        }
        res.status(200).send({ message: "Job listing deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting job listing." });
    }
};
