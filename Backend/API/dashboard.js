const express = require('express');
const router = express.Router();
const Product = require('../productModel');
const Bill = require('../billModel');

// GET dashboard summary
router.get('/', async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const lowStock = await Product.countDocuments({ stock: { $lt: 10 } });
    const bills = await Bill.find();

    let totalSales = 0;

    for (const bill of bills) {
      totalSales += bill.totalAmount;
    }

    res.json({
      totalProducts,
      lowStock,
      totalSales,
      totalBills: bills.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;