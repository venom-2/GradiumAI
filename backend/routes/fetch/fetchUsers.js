const express = require('express');
const router = express.Router();
const pool = require('../../db');

router.get('/fetch',async (req,res) => {
    try{
        const result = await pool.query(`select * from users where role != 'Admin'`);

        console.log(result.rows);

        res.status(200).json({users: result.rows});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;