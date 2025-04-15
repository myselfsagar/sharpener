const router = require("express").Router();
const bookingControllers = require("../controllers/bookingControllers");

router.post("/", bookingControllers.addBooking);

module.exports = router;
