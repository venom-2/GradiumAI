const express = require('express');
const pool = require('../../db');
const router = express.Router();

router.delete('/delete/:id', async(req,res) => {
    const {id} = req.params;
    try{
        const result = await pool.query('DELETE FROM students WHERE roll_no = $1 RETURNING *',[id]);
        console.log(result.rows);
        res.status(200).json({message: 'Student deleted successfully', student: result.rows[0]});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete('/delete-by-email/:email', async(req,res) => {
    const {email} = req.params;
    try{
        const result = await pool.query('DELETE FROM students WHERE email = $1 RETURNING *',[email]);
        console.log(result.rows);
        res.status(200).json({message: 'Student deleted successfully', student: result.rows[0]});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete('/delete-by-phone/:phone', async(req,res) => {
    const {phone} = req.params;
    try{
        const result = await pool.query('DELETE FROM students WHERE phone_no = $1 RETURNING *',[phone]);
        console.log(result.rows);
        res.status(200).json({message: 'Student deleted successfully', student: result.rows[0]});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});





module.exports = router;