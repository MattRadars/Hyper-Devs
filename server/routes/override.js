const express = require('express');
const db = require('../database.js').databaseConnection;
const router = express.Router();

// api for displaying students using id
router.get("/:student_id", (request, response) => {
    const studentID = request.params.student_id
    const query = "SELECT * FROM students WHERE id = ?";
    db.query(query, [studentID], (err, data) => {
      if (err) {
        console.log(err);
        return response.json(err);
      }
      return response.json(data);
    });
});

module.exports = router;