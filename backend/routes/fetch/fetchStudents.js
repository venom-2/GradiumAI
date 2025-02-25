const express = require('express');
const router = express.Router();
const pool = require('../../db')

router.get('/studentList',(req,res) => {
    try{
        pool.query('Select * from students')
            .then(students => {
                res.status(200).send(students.rows);
            })
    }
    catch(error){
        console.log(error);
        res.status(500);
    }
})

module.exports = router;