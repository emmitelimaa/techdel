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
router.get("/companies/", async (req, res, next) => {
  try {
    let result = await db(`SELECT * from company`);
    if (result.data.length) {
      const formattedResult = result.data.map(async (item) => {
        const repos = await db(
          `SELECT * from repo WHERE company_id = ${item.id}`
        );

        if (repos.data.length) {
          return { ...item, repo: repos };
        } else {
          return { ...item };
        }
      });
      console.log("formated Result", formattedResult);

      // let repos = await db(sql.getRepoById(companyId));
      // result.data[0].repos = repos.data;
      res.send(formattedResult);
    } else {
      res.send({ msg: "There is no company data" });
    }
  } catch (err) {
    console.log(`Network Error`);
  }
});

router.get("/companies/:id", async (req, res, next) => {
  const companyId = req.params.id;
  try {
    let result = await db(sql.getCompanyById(companyId));

    if (result) {
      let repos = await db(sql.getRepoById(companyId));
      if (repos.length) {
        result.data[0].repos = repos.data;
        res.send(result.data[0]);
      }
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
  const { company_name, repo } = req.body;
  const company = await db(sql.getCompanyByName(company_name));
  if (company.length) {
    const companyId = company.data[0].id;
    await db(sql.addRepo(repo, companyId));
    const data = await db(sql.getAllRepos());
    res.status(201).send(data);
  } else {
    await db(sql.addCompany(company_name));
    const result = await db(sql.getCompanyByName(company_name));
    await db(sql.addRepo(repo, result.data[0].id));
    console.log(repo);
    const data = await db(sql.getAllRepos());

    res.status(201).send(data);
  }
});

module.exports = router;
