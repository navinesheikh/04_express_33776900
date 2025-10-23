// Set up express
const express = require("express");
const app = express();// Initialize an Express application
const port = 8000; // Define the port number

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);// Tell the app to use the imported routes

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
