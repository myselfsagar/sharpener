const Student = require("../models/Student");

//add student
const addStudents = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res.status(400).send("name and email and age are required");
    }

    const student = await Student.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).send(`Student with name ${name} added`);
  } catch (err) {
    console.log("Error while inserting value", err);
    return res.status(500).send("Error inserting value", err.message);
  }
};

//update student
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not found!");
    }

    if (name) student.name = name;
    if (email) student.email = email;
    if (age) student.age = age;
    await student.save();

    res.send(`Student with id ${id} successfully updated`);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error while updating", err.message);
  }
};

//delete student
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.destroy({
      where: {
        id: id,
      },
    });

    if (!student) {
      return res.status(404).send("Student not found!");
    }

    res.send(`Student with id ${id} successfully deleted`);
  } catch (err) {
    console.log("Error while deleting", err);
    return res.status(500).send("Error while deleting student", err.message);
  }
};

module.exports = {
  addStudents,
  updateStudent,
  deleteStudent,
};
