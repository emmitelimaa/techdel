var express = require("express");
var router = express.Router();
const models = require(".../models");

//GET

router.get("/", async (req, res) => {
    try {
        const companies = await models.Companies.findAll();
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const companies = await models.Companies.findOne({
            where: {
                id,
            }
        });
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/:id/repos", async (req, res) => {
    try {
        const companies = await models.Companies.findOne({
            where: {
                id,
            }
        });

        const repos = await companies.getRepos();
        res.send(repos);
    } catch (error) {
        res.status(500).send(error);
    }
});

//POST

router.post("/", async (req, res) => {
    const { name } = req.body;

    try {
        const companies = await models.Companies.create({ name });
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;