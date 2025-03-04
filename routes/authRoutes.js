const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "supersecretkey";

router.post("/login", (req, res) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ message: "Username is required" });
    
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

module.exports = router;