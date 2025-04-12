const dbConnect = require("../utils/db-connection");

//add student
const addStudents = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("name and email required");
  }

  const insertQuery = "INSERT INTO students (name, email) VALUES (?, ?)";
  dbConnect.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.log("Error while inserting value", err);
      dbConnect.end();
      return res.status(500).send("Error inserting value", err.message);
    }
    res.send(`Student with name ${name} added`);
  });
};

//update student
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updateQuery = "UPDATE students SET name = ?, email = ? WHERE id = ?";
  dbConnect.execute(updateQuery, [name, email, id], (err, result) => {
    if (err) {
      console.log(err);
      dbConnect.end();
      return res.status(500).send("Error while updating", err.message);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found!");
    }

    res.send(`Student with id ${id} successfully updated`);
  });
};

//delete student
const deleteStudent = (req, res) => {
  const { id } = req.params;
  const deleteQuery = "DELETE FROM students where id = ?";
  dbConnect.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log("Error while deleting", err);
      dbConnect.end();
      return res.status(500).send("Error while deleting student", err.message);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found!");
    }
    res.send(`Student with id ${id} successfully deleted`);
  });
};

module.exports = {
  addStudents,
  updateStudent,
  deleteStudent,
};
