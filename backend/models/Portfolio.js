const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema(
  {
    home: Object,
    about: Object,
    education: Object,
    skills: Object,
    projects: Object,
    certifications: Object,
    codingProfiles: Object,
    experience: Object,
    contact: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio", PortfolioSchema);