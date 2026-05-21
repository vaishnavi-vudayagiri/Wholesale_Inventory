const express = require("express");
const router = express.Router();

const Product = require("../productModel");
const Bill = require("../billModel");

// STOCK REPORT - returns all products
router.get("/stock", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// LOW STOCK REPORT - products with stock less than 5
router.get("/low-stock", async (req, res) => {
  try {
    const products = await Product.find({
      stock: { $lt: 5 },
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// SALES REPORT - returns all bills as an array
router.get("/sales", async (req, res) => {
  try {
    const bills = await Bill.find().sort({
      createdAt: -1,
    });

    res.json(bills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;