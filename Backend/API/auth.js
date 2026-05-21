const express = require('express');
const router = express.Router();

// Demo login credentials
const DEMO_USER = {
  email: 'admin@example.com',
  password: 'admin123',
  name: 'Admin'
};

// POST login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    return res.json({
      success: true,
      token: 'demo-token-123',
      user: {
        name: DEMO_USER.name,
        email: DEMO_USER.email
      }
    });
  }

  res.status(401).json({
    success: false,
    message: 'Invalid email or password'
  });
});

// GET profile
router.get('/profile', (req, res) => {
  res.json({
    name: DEMO_USER.name,
    email: DEMO_USER.email
  });
});

module.exports = router;
