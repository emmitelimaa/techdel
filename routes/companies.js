var express = require("express");
var router = express.Router();
var models = require("../models");

//GET

router.get("/", async (req, res) => {
    try {
        const companies = await models.Companies.findAll(
            {
            attributes: ["company_name"],
            include:
                models.Repos,
            }
        );
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/:company_id", async (req, res) => {
    const {company_id} = req.params;
    try {
        const company = await models.Companies.findOne({
            where: {
                company_id,
            }
        });
        res.send(company);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/:company_id/repos", async (req, res) => {
    const {company_id} = req.params;
    try {
        const companies = await models.Companies.findOne({
            where: {
                company_id,
            }
        });

        const repos = await companies.getRepos();
        res.send(repos);
    } catch (error) {
        res.status(500).send(error);
    }
});

//POST

//create one company
router.post("/", async (req, res) => {
    const { company_name } = req.body;

    try {
        const company = await models.Companies.create({ company_name });
        res.send(company);
    } catch (error) {
        res.status(500).send(error);
    }
});

//create one company IF it doesn't exists
router.post("/:id", async (req, res) => {
    const { id } = req.params;
    const { company_name } = req.body;

    try {
        const [company, created] = await models.Companies.findOrCreate({
            where: {
                id,
            },
            defaults: {
                company_name, 
            }
        });
    
        if (created) {
            // If a new company was created, send a success message
            res.status(201).send(`Created new company: ${company_name}`);
        } else {
            // If an existing company was found, send a message indicating that it already exists
            res.status(200).send(`Company already exists: ${company_name}`);
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
});

//PUT
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { company_name } = req.body;
  
    try {
      const company = await models.Companies.findByPk(id);
  
      if (company) {
        company.company_name = company_name;
        await company.save();
  
        res.status(200).send(`Updated company name to ${company_name}`);
      } else {
        res.status(404).send(`Company with id ${id} not found`);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;