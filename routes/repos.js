var express = require("express");
var router = express.Router();
const models = require(".../models");

router.get("/", async (req, res) => {
    try {
        const companies = await models.Companies.findAll();
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;