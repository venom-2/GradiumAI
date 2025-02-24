const express = require('express');
const pool = require('./db');
require('dotenv').config();

// initialise server
const app = express();
const PORT = process.env.PORT;  

// postgres instance to connect to postgres database
pool;

// home route
app.get('/', (req,res) => {
    res.status(200);
    res.send("Welcome back!");
})

// route to fetch list of all students
app.use('/fetch',require('./routes/fetchStudents'));

app.listen(PORT, () => {
    console.log("Server listening at port:", PORT);
})

