var express = require("express");
var router = express.Router();
const db = require("../model/helper");
const sql = require("./helpers");

router.get("/", function (req, res, next) {
  res.send("Welcome to the API");
});
router.get("/companies/:id", async (req, res, next) => {
  const companyId = req.params.id;
  try {
    let result = await db(sql.getCompanyById(companyId));

    if(result.data.length !==0){
      res.send(result.data);

    } else {
      res.status(404).send({ error: "This company does not exist" });
    }
  } catch (err) {
    console.log(err, `Network Error`);
  }
});

/* GET ALL COMPANIES & Repos*/
router.get("/companiesrepos", async (req, res, next) => {
  try {
    let result = await db(sql.getAllCompaniesRepos());
    if (result.data.length) {

      res.send(result.data)

    } else {
      res.send({ error: "There is no company data" });
    }
  } catch (err) {
    console.log(`Network Error`);
  }
});

//get all comapnies
router.get("/companies", async (req, res, next) => {
  try {
    let result = await db("SELECT * FROM companies;");

    if (result.data.length !== 0) {
      res.send(result.data);

    } else {
      res.send({ error: "There is no company data" });
    }
  } catch (err) {
    console.log(`Network Error`);
  }
});

//insert a company
router.post("/companies", async (req, res) => {
  const { company_name } = req.body;
  
  try {
    await db(sql.addCompany());

    let result = await db(sql.getAllCompanies)
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});



// router.post("/companies", async (req, res) => {
//   const { company_name, repo } = req.body;
//   const company = await db(sql.getCompanyByName(company_name));
//   if (company.data.length) {
//     const companyId = company.data[0].id;
//     // If Company already exists, add repo information
    
//       await db(sql.addRepo(repo[0], companyId));
    

//     // return new list of repos
//     const data = await db(sql.getAllRepos());
//     res.status(201).send(data);
//   } else {
//     // Company Does not exist - Add it
//     await db(sql.addCompany(company_name));
//     // Get newly created ID of company
//     const result = await db(sql.getCompanyByName(company_name));
//     // Add Repo
    
//       await db(sql.addRepo(repo[0], result.data[0].id));
//       const data = await db(sql.getAllRepos());
    

//     res.status(201).send(data);
//   }
// });

module.exports = router;
