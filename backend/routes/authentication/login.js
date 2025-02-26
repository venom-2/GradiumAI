const express = require('express');
const router = express.Router();
const pool = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/login', async (req,res) => {
    const {email, password} = req.body;

    try{
        const userResult = await pool.query('SELECT * FROM users WHERE email = $1',[email]);

        console.log(userResult.rows);

        // check if user exists or not
        if(userResult.rows.length === 0){
            return res.status(401).json({'message': 'Invalid email or password'});
        }

        const user = userResult.rows[0];

        // comparing password from user and from DB
        const isMatch = bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(401).json({'message':'Invalid email or password'});
        }

        // generate jwt token
        const token = jwt.sign(
            { userId: user.id, email: user.email, position: user.position },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({token, user: {first_name: user.first_name,last_name: user.last_name, email: user.email, position: user.position}});

    }
    catch(error){
        console.log(error);
        res.status(500).json({'message': 'Internal Server Error'});
    }
})

module.exports = router;