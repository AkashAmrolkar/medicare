const express = require('express');
const router = express.Router();
const Users = require('../model/user')

// POST route to save form data to MongoDB
router.post('/submit', (req, res) => {
  const { firstname, lastname, email, role, gender } = req.body;

  const newUsers = new Users({
    firstname,
    lastname,
    email,
    role,
    gender,
  });

  newUsers.save()
    .then((entry) => {
      res.status(201).json(entry);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;