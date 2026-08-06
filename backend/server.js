const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const portfolioRoutes = require("./routes/portfolioRoutes");
dotenv.config();
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});