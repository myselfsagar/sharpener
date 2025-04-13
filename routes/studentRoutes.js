const router = require("express").Router();
const studentControllers = require("../controllers/studentControllers");

router.post("/add", studentControllers.addStudents);
router.put("/update/:id", studentControllers.updateStudent);
router.delete("/delete/:id", studentControllers.deleteStudent);

module.exports = router;
