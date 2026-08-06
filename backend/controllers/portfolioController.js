const Portfolio = require("../models/Portfolio");
const defaultPortfolio = require("../data/defaultPortfolio");

// GET Portfolio
const getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne();

    if (!portfolio) {
  portfolio = await Portfolio.create(defaultPortfolio);
}

    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE Portfolio
const updatePortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne();

    if (!portfolio) {
  portfolio = await Portfolio.create({
    ...defaultPortfolio,
    ...req.body,
  });
}else {
      portfolio = await Portfolio.findByIdAndUpdate(
        portfolio._id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getPortfolio,
  updatePortfolio,
};