
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/auth.js');
const express = require('express');
const router = express.Router();

router.post('/signin', async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/signup', async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports=router;
