const router = require("express").Router();
const busControllers = require("../controllers/busControllers");

router.post("/", busControllers.addBus);
router.get("/", busControllers.getAllBuses);
router.get("/available/:seats", busControllers.getBusesByAvailableSeats);

module.exports = router;
