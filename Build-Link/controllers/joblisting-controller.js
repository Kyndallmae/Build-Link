const db = require('../models');

exports.getAllJobListings = async (req, res) => {
    const jobs = await db.JobListing.findAll();
    res.status(200).json(jobs);
};

exports.getJobListingById = async (req, res) => {
    const job = await db.JobListing.findByPk(req.params.id);
    if (job) {
        res.status(200).json(job);
    } else {
        res.status(404).json({ error: "Job not found" });
    }
};

exports.createJobListing = async (req, res) => {
    const newJob = await db.JobListing.create(req.body);
    res.status(201).json(newJob);
};

exports.updateJobListing = async (req, res) => {
    await db.JobListing.update(req.body, {
        where: { job_id: req.params.id }
    });
    res.status(200).json({ message: "Job listing updated successfully" });
};

exports.deleteJobListing = async (req, res) => {
    await db.JobListing.destroy({
        where: { job_id: req.params.id }
    });
    res.status(200).json({ message: "Job listing deleted successfully" });
};
