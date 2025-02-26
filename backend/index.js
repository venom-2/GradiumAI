const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

// initialise server
const app = express();
const PORT = process.env.PORT; 

app.use(express.json());
app.use(cors());

// postgres instance to connect to postgres database
pool;

// home route
app.get('/', (req,res) => {
    res.status(200);
    res.send("Welcome back!");
})

// route to fetch list of all students
app.use('/fetch',require('./routes/fetch/fetchStudents'));

// route to add the user in DB
app.use('/user',require('./routes/add_users/user'));

// login route
app.use('/',require('./routes/authentication/login'));

app.use('/user',require('./routes/fetch/fetchUsers'));

app.listen(PORT, () => {
    console.log("Server listening at port:", PORT);
})

