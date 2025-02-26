const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require('../../db');
require('dotenv').config();

router.post('/register',async (req,res) => {

    const { email,first_name,last_name, password, position } = req.body;

    try{
        // Check if user already exists
        const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await pool.query('INSERT INTO users (email, first_name, last_name, password, position) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
            [email, first_name, last_name, hashedPassword, position]);

        res.status(201).json({ message: 'User registered successfully', user: newUser.rows[0] });

        console.log('User inserted successfully');
    }

    catch(error){
        console.log(error);
        res.status(500).json({ message: 'Internal Server error' });
    }
})

module.exports = router;