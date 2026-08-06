const express = require("express");

const {
  getPortfolio,
  updatePortfolio,
} = require("../controllers/portfolioController");

const router = express.Router();

router.get("/", getPortfolio);

router.put("/", updatePortfolio);

module.exports = router;