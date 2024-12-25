// Create a new router
const express = require("express");
const router = express.Router();
const now = new Date();
const currentDateTime = now.toLocaleString();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get("/contact", (req, res) => res.send ('<h1>07454115262</h1>'));

router.get("/date", (req, res) => res.send (currentDateTime));

// Export the router object so index.js can access it
module.exports = router;