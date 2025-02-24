const express = require('express');
const router = express.Router();
const pool = require('../db')

router.get('/studentList',(req,res) => {
    try{
        console.log("Students List:");
        pool.query('Select * from students')
            .then(students => {
                console.log(students);
                res.send(students.rows);
            })
    }
    catch(error){
        console.log(error);
        res.status(500);
    }
})

module.exports = router;