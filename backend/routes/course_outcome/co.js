const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/fetch/:sem/:subject_id', async (req, res) => {
    const { sem, subject_code } = req.params;

    const students = await pool.query('SELECT * FROM students WHERE semester = $1',[sem]);

    let co1 = 0, co2 = 0, co3 = 0, co4 = 0, co5 = 0;

    for (let i = 0; i < students.rows.length; i++) {
        const student = students.rows[i];
        const { roll_no } = student;

        // Fetching CT-01 details
        const ct1 = await pool.query('select a.type_id,ast.type_name,a.subject_code,s.subject_name,a.max_marks,a.roll_no,a.semester_id,a.marks_obtained,q.question_id,q.question_no,q.max_marks as max_mark,q.question_text,q.co,q.marks_obtained from assessment a,questions q,assessment_type ast, subjects s where ast.type_id = a.type_id and a.assessment_id = q.assessment_id and s.subject_code = a.subject_code AND a.type_id = 1 AND roll_no = $1 AND semester_id = $2 AND s.subject_code = $3;', [roll_no, sem, subject_code]);
       
        if (ct1.rows.length === 0) {
            return res.status(404).json({ message: 'CT-01 details not found' });
        }

        // Calculating COs for CT-01
        for (let j = 0; j < ct1.rows.length; j++) {
            const row = ct1.rows[j];
            if(row.co === 1) {
                co1 += row.marks_obtained;
            } else if(row.co === 2) {
                co2 += row.marks_obtained;
            } else if(row.co === 3) {
                co3 += row.marks_obtained;
            } else if(row.co === 4) {
                co4 += row.marks_obtained;
            } else if(row.co === 5) {
                co5 += row.marks_obtained;
            }
        }

        // Fetching CT-02 details
        const ct2 = await pool.query('select a.type_id,ast.type_name,a.subject_code,s.subject_name,a.max_marks,a.roll_no,a.semester_id,a.marks_obtained,q.question_id,q.question_no,q.max_marks as max_mark,q.question_text,q.co,q.marks_obtained from assessment a,questions q,assessment_type ast, subjects s where ast.type_id = a.type_id and a.assessment_id = q.assessment_id and s.subject_code = a.subject_code AND a.type_id = 2 AND roll_no = $1 AND semester_id = $2 AND s.subject_code = $3;', [roll_no, sem, subject_code]);
       
        if (ct2.rows.length === 0) {
            return res.status(404).json({ message: 'CT-02 details not found' });
        }

        for (let j = 0; j < ct2.rows.length; j++) {
            const row = ct2.rows[j];
            if(row.co === 1) {
                co1 += row.marks_obtained;
            } else if(row.co === 2) {
                co2 += row.marks_obtained;
            } else if(row.co === 3) {
                co3 += row.marks_obtained;
            } else if(row.co === 4) {
                co4 += row.marks_obtained;
            } else if(row.co === 5) {
                co5 += row.marks_obtained;
            }
        }

        // Fetching PUT details
        const put = await pool.query('select a.type_id,ast.type_name,a.subject_code,s.subject_name,a.max_marks,a.roll_no,a.semester_id,a.marks_obtained,q.question_id,q.question_no,q.max_marks as max_mark,q.question_text,q.co,q.marks_obtained from assessment a,questions q,assessment_type ast, subjects s where ast.type_id = a.type_id and a.assessment_id = q.assessment_id and s.subject_code = a.subject_code AND a.type_id = 1 AND roll_no = $1 AND semester_id = $2 AND s.subject_code = $3;', [roll_no, sem, subject_code]);
       
        if (put.rows.length === 0) {
            return res.status(404).json({ message: 'PUT details not found' });
        }

        for (let j = 0; j < ct1.rows.length; j++) {
            const row = put.rows[j];
            if(row.co === 1) {
                co1 += row.marks_obtained;
            } else if(row.co === 2) {
                co2 += row.marks_obtained;
            } else if(row.co === 3) {
                co3 += row.marks_obtained;
            } else if(row.co === 4) {
                co4 += row.marks_obtained;
            } else if(row.co === 5) {
                co5 += row.marks_obtained;
            }
        }

    }


});

module.exports = router;
