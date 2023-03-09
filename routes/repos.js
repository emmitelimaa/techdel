var express = require("express");
var router = express.Router();
const models = require("../models");

//----------GET------------

router.get("/", async (req, res) => {
    try {
        const repos = await models.Repos.findAll();
        res.send(repos);
    } catch (error) {
        res.status(500).send(error);
    }
});


//------------POST---------------
router.post('/', async function(req, res) {
    let { repo_name, team_name, technology, company_id } = req.body;

    try {
        let repo = await Repo.create({ repo_name, team_name, technology, company_id });
        let repos = await Repo.findAll();
        res.status(201).send(repos);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

//create company if it doesn't exists, and create repos to that company
router.post("/:company_name/repos", async (req, res) => {
    const { company_name } = req.params;
    const { repo_name, team_name, technology } = req.body;
    //Change company_name back to id?

    try {
        const [company, companyCreated] = await models.Companies.findOrCreate({
            where: {
                company_name, 
            },
        });

        const existingRepo = await models.Repos.findOne({
            where: {
              repo_name,
              team_name,
              technology,
              CompanyId: company.id,
            },
          });
      
          if (existingRepo) {
            res.status(409).send("Repo already exists");
            return;
          }
      
          const repo = await company.createRepo({
            repo_name,
            team_name,
            technology,
          });
      
          res.status(201).send({ company, repo });
        } catch (error) {
          res.status(500).send({ error });
        }
});

module.exports = router;