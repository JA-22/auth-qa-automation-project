const express = require("express");
const router = express.Router();
const db = require("../db/database");

/*
REGISTER
POST /api/register
*/

router.post("/register", (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  db.run(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, password],
    function (err) {

      if (err) {
        return res.status(400).json({
          message: "User already exists"
        });
      }

      return res.status(201).json({
        message: "User created successfully",
        userId: this.lastID
      });

    }
  );

});


/*
LOGIN
POST /api/login
*/

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, row) => {

      if (err) {
        return res.status(500).json({
          message: "Database error"
        });
      }

      if (!row) {
        return res.status(401).json({
          message: "Invalid credentials"
        });
      }

      return res.json({
        token: "fake-jwt-token",
        user: row.email
      });

    }
  );

});

module.exports = router;