const express = require("express");
const router = express.Router();

const Product = require("../models/Product");


/*  GET ALL PRODUCTS*/
router.get("/", async (req, res) => {

  try {

    const products = await Product.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});




/* 
   GET SINGLE PRODUCT
 */
router.get("/:id", async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});




/*ADD PRODUCT*/
router.post("/", async (req, res) => {

  try {

    const {
      name,
      category,
      price,
      stock,
      supplier,
    } = req.body;



    // Validation
    if (
      !name ||
      !category ||
      !price ||
      !stock
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }



    // Create Product
    const newProduct = new Product({
      name,
      category,
      price,
      stock,
      supplier,
    });

    const savedProduct =
      await newProduct.save();



    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: savedProduct,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});




/* ==================================================
   UPDATE PRODUCT
================================================== */
router.put("/:id", async (req, res) => {

  try {

    const updatedProduct =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );



    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }



    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});




/* ==================================================
   DELETE PRODUCT
================================================== */
router.delete("/:id", async (req, res) => {

  try {

    const deletedProduct =
      await Product.findByIdAndDelete(
        req.params.id
      );



    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }



    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



module.exports = router;