const express = require('express');
const pool = require('../../db');
const router = express.Router();

router.get('/fetch-all', async(req,res) => {
    try{
        const result = await pool.query('SELECT * FROM students');
        console.log(result.rows);
        res.status(200).json({students: result.rows});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/fetch/:id', async(req,res) => {
    const {id} = req.params;
    try{
        const result = await pool.query('SELECT * FROM students WHERE roll_no = $1',[id]);
        console.log(result.rows);
        res.status(200).json({student: result.rows[0]});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
);

router.get('/fetch-by-name/:name', async(req,res) => {
    const {name} = req.params;
    try{
        const result = await pool.query('SELECT * FROM students WHERE first_name = $1',[name]);
        console.log(result.rows);
        res.status(200).json({student: result.rows[0]});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
);  

router.get('/fetch-by-email/:email', async(req,res) => {
    const {email} = req.params;
    try{
        const result = await pool.query('SELECT * FROM students WHERE email = $1',[email]);
        console.log(result.rows);
        res.status(200).json({student: result.rows[0]});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
);

router.get('/fetch-by-phone/:phone', async(req,res) => {
    const {phone} = req.params;
    try{
        const result = await pool.query('SELECT * FROM students WHERE phone_no = $1',[phone]);
        console.log(result.rows);
        res.status(200).json({student: result.rows[0]});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
);

router.get('/fetch-by-course/:course', async(req,res) => {
    const {course} = req.params;
    try{
        const result = await pool.query('SELECT * FROM students WHERE course_id = $1',[course]);
        console.log(result.rows);
        res.status(200).json({student: result.rows[0]});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
);

router.get('/fetch-by-semester/:semester', async(req,res) => {
    const {semester} = req.params;
    try{
        const result = await pool.query('SELECT * FROM students WHERE semester = $1',[semester]);
        console.log(result.rows);
        res.status(200).json({student: result.rows[0]});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
);





module.exports = router;