const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Wholesale Inventory & Billing Backend Running",
  });
});

// API Routes
app.use("/api/auth", require("./API/auth"));
app.use("/api/products", require("./API/products"));
app.use("/api/customers", require("./API/customers"));
app.use("/api/billing", require("./API/billing"));
app.use("/api/dashboard", require("./API/dashboard"));
app.use("/api/reports", require("./API/reports"));

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});