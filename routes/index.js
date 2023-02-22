var express = require("express");
var router = express.Router();
const db = require("../model/helper");
const sql = require("./helpers");
/*
Non Urgent TODOS:
- Add created and updated date to tables
- Updated generic col names to be table specific company_name
*/

router.get("/", function (req, res, next) {
  res.send("Welcome to the API");
});

/* GET ALL COMPANIES & Repos*/
router.get("/companies/:id", async (req, res, next) => {
  const companyId = req.params.id;
  try {
    let result = await db(sql.getCompanyById(companyId));

    if (result) {
      let repos = await db(sql.getRepoById(companyId));
      result.data[0].repos = repos.data;
      res.send(result.data[0]);
    } else {
      res.status(404).send({ msg: "This company does not exist" });
    }
  } catch (err) {
    console.log(`Network Error`);
  }
});

// {
//     "companyName": "New Company",
//     "repo": {"name": "SEVEN","team_name": "Name 2","technology": "HTML"}
// }

// TODO: Needs Error Handling
router.post("/companies", async (req, res) => {
  const { companyName, repo } = req.body;
  const company = await db(sql.getCompanyByName(companyName));
  if (company.length) {
    const companyId = company.data[0].id;
    await db(sql.addRepo(repo, companyId));
    const data = await db(sql.getAllRepos());
    res.status(201).send(data);
  } else {
    await db(sql.addCompany(companyName));
    const result = await db(sql.getCompanyByName(companyName));
    await db(sql.addRepo(repo, result.data[0].id));
    const data = await db(sql.getAllRepos());
    res.status(201).send(data);
  }
});

module.exports = router;
