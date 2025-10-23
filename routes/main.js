// Create a new router
const express = require("express");
const router = express.Router();
const now = new Date();
const currentDateTime = now.toLocaleString();
const path = require("path");

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get("/contact", (req, res) => res.send ('<h1>07454115262</h1>'));

router.get("/date", (req, res) => res.send (currentDateTime));

//welcome route with parameter
router.get("/welcome/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Welcome, ${name}!</h1>`);
});

//chain route demonstrating next()
router.get("/chain",
  (req, res, next) => {
    console.log("First handler executed");
    next(); // move to the next function
  },
  (req, res) => {
    res.send("<h1>Chained route executed successfully!</h1>");
  }
);

//Send HTML file
router.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "../a.html"));
});

// Export the router object so index.js can access it
module.exports = router;