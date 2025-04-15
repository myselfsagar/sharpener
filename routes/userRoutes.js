const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.post("/", userControllers.addUser);
router.get("/", userControllers.getAllUsers);
router.get("/:id/bookings", userControllers.getUserBookings);

module.exports = router;
