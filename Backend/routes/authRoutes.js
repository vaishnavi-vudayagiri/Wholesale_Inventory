const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // CHECK EMPTY FIELDS
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // CHECK EXISTING USER
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // RESPONSE
    res.status(201).json({
      message: "User Registered Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {

    console.log("BODY:", req.body);

    const { email, password } = req.body;

    // CHECK EMPTY FIELDS
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and Password are required",
      });
    }

    // FIND USER
    const user = await User.findOne({ email });

    console.log("USER:", user);

    // CHECK USER
    if (!user) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    // CHECK PASSWORD EXISTS
    if (!user.password) {
      return res.status(500).json({
        message: "User password missing in database",
      });
    }

    // COMPARE PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    console.log("MATCH:", isMatch);

    // INVALID PASSWORD
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    // CHECK JWT SECRET
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        message: "JWT_SECRET missing in environment variables",
      });
    }

    // GENERATE TOKEN
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // SUCCESS RESPONSE
    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;