const express = require('express');
const pool = require('../../db');
const router = express.Router();

router.put('/update/:roll_no', async (req, res) => {
    try {
        const { roll_no } = req.params;
        const { first_name, last_name, department_id, semester_id, phone_no, admission_type, passing_year, section, email, admission_year, course_id } = req.body;

        const result = await pool.query(
            `UPDATE students 
             SET first_name = $1, last_name = $2, department_id = $3, semester_id = $4, 
                 phone_no = $5, admission_type = $6, passing_year = $7, section = $8, 
                 email = $9, admission_year = $10, course_id = $11 
             WHERE roll_no = $12 
             RETURNING *`,
            [first_name, last_name, department_id, semester_id, phone_no, admission_type, passing_year, section, email, admission_year, course_id, roll_no]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ message: "Student updated successfully", student: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
