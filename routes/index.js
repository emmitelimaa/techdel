var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to the API");
});

/* GET ALL COMPANIES & REPROS */
router.get("/companies/:id", async (req, res, next) => {
  const companyId = req.params.id;
  try {
    let result = await db(`SELECT * FROM company WHERE id = ${companyId}`);
    if (result) {
      res.send(result.data);
    } else {
      res.status(404).send({ msg: "This company does not exist" });
    }
  } catch (err) {
    console.log(`Network Error`);
  }
});

router.get("/:companyId/repo", async (req, res, next) => {
  const companyId = req.params.companyId;
  try {
    let result = await db(`SELECT * FROM repo WHERE company_id = ${companyId}`);
    if (result) {
      res.send(result.data);
    } else {
      res.status(404).send({ msg: "This company does not exist" });
    }
  } catch (err) {
    console.log(`Network Error`);
  }
});
/* ADD A COMPANY & REPRO */
/* DELETE A REPRO */
/* DELETE A COMPANY */

module.exports = router;
