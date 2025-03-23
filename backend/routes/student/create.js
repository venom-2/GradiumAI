const express = require('express');
const pool = require('../../db');
const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const ifPresent = await pool.query('SELECT * FROM students WHERE roll_no = $1', [req.body.roll_no]);    
        if (ifPresent.rows.length > 0) {
            return res.status(400).json({ message: 'Student already exists' });
        }
        console.log(req.body);
        const { roll_no, first_name, last_name, department_id, semester_id, phone_no, admission_type, passing_year, section, email, admission_year, course_id } = req.body;
        const result = await pool.query('INSERT INTO students (roll_no, first_name, last_name, department_id, semester_id, phone_no, admission_type, passing_year, section, email, admission_year, course_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', [roll_no, first_name, last_name, department_id, semester_id, phone_no, admission_type, passing_year, section, email, admission_year, course_id]);
        console.log(result.rows);
        res.status(201).json({ message: 'Student created successfully', student: result.rows[0] });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
);

module.exports = router;