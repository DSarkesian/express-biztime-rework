const express = require("express");
//const slugify = require("slugify");
const { NotFoundError } = require("../expressError");

const db = require("../db");

let router = new express.Router();


router.get("/", async function(req,res,next){
  const results = await db.query(`SELECT code, name
  FROM companies
  ORBER BY name`);
  const companies = results.rows;

  return res.json({companies})
})

module.exports = router;
