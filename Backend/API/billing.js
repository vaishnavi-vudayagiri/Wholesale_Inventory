const express = require('express');
const router = express.Router();
const Bill = require('../billModel');
const Product = require('../productModel');

// GET all bills
router.get('/', async (req, res) => {
  try {
    const bills = await Bill.find().sort({ createdAt: -1 });
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create bill
router.post('/', async (req, res) => {
  try {
    const { customerId, customerName, items, gst = 0, discount = 0 } = req.body;

    let subtotal = 0;

    // Reduce stock and calculate subtotal
    for (const item of items) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.productName}` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
      }

      product.stock -= item.quantity;
      await product.save();

      subtotal += item.quantity * item.price;
      item.total = item.quantity * item.price;
    }

    const totalAmount = subtotal + gst - discount;

    const bill = await Bill.create({
      customerId,
      customerName,
      items,
      subtotal,
      gst,
      discount,
      totalAmount
    });

    res.status(201).json(bill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;