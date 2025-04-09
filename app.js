const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.json());  // Parse JSON data
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded data
app.use(cookieParser());  // Parse cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory
app.use("view engine", "ejs"); // Set EJS as the view engine 

app.get('/', (req, res) => {});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});