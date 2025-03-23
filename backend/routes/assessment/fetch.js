const express = require('express');
const router = express.Router();
const pool = require('../../db');

router.get('/fetch/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const assessment = await pool.query('select a.type_id,ast.type_name,a.subject_code,s.subject_name,a.max_marks,a.roll_no,a.semester_id,a.marks_obtained,q.question_id,q.question_no,q.max_marks as max_mark,q.question_text,q.co,q.marks_obtained from assessment a,questions q,assessment_type ast, subjects s where ast.type_id = a.type_id and a.assessment_id = q.assessment_id and s.subject_code = a.subject_code AND roll_no = $1;', [id]);
        if (assessment.rows.length === 0) {
            return res.status(404).json({ message: 'Assessment not found' });
        }
        res.json({
            message: `Assessment of ${id}`,
            assessment: assessment.rows
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Try again later...");
    }
}
);

router.get('/fetch/:id/:sem', async (req, res) => {
    try {
        const { id, sem } = req.params;
        const assessment = await pool.query('select a.type_id,ast.type_name,a.subject_code,s.subject_name,a.max_marks,a.roll_no,a.semester_id,a.marks_obtained,q.question_id,q.question_no,q.max_marks as max_mark,q.question_text,q.co,q.marks_obtained from assessment a,questions q,assessment_type ast, subjects s where ast.type_id = a.type_id and a.assessment_id = q.assessment_id and s.subject_code = a.subject_code AND roll_no = $1 AND semester_id = $2', [id, sem]);
        if (assessment.rows.length === 0) {
            return res.status(404).json({ message: 'Assessment not found' });
        }
        res.json({
            message: `Assessment of ${id}`,
            assessment: assessment.rows
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Try again later...");
    }
}
);

router.get('/fetch/assignment/:id/:sem/:no', async (req, res) => {
    try {
        const { id, sem, no } = req.params;
        const assessment = await pool.query(
            `SELECT a.assessment_id, a.type_id, a.subject_code, a.max_marks, a.roll_no, a.semester_id, a.marks_obtained, q.question_no 
             FROM assessment a, questions q 
             WHERE a.assessment_id = q.assessment_id 
             AND q.question_no LIKE $1 || '.%' 
             AND a.roll_no = $2 
             AND a.semester_id = $3;`,
            [no, id, sem]
        );
                console.log(assessment);
        if (assessment.rows.length === 0) {
            return res.status(404).json({ message: 'Assessment not found' });
        }
        res.json({
            message: `Assessment of ${id}`,
            assessment: assessment.rows
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Try again later...");
    }
}
);

router.get('/fetch/:id/:sem/:type', async (req, res) => {
    try {
        const { id, sem, type } = req.params;
        const assessment = await pool.query('select a.type_id,ast.type_name,a.subject_code,s.subject_name,a.max_marks,a.roll_no,a.semester_id,a.marks_obtained,q.question_id,q.question_no,q.max_marks as max_mark,q.question_text,q.co,q.marks_obtained from assessment a,questions q,assessment_type ast, subjects s where ast.type_id = a.type_id and a.assessment_id = q.assessment_id and s.subject_code = a.subject_code AND roll_no = $1 AND semester_id = $2 AND a.type_id = $3;', [id, sem, type]);
        if (assessment.rows.length === 0) {
            return res.status(404).json({ message: 'Assessment not found' });
        }
        res.json({
            message: `Assessment of ${id}`,
            assessment: assessment.rows
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Try again later...");
    }
}
);

router

module.exports = router;