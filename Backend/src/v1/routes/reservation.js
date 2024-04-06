const { getAllReservations, getReservationByID, createReservation } = require("../controllers/reservation");
const {verifyToken} = require('../middleware/tokenHandler');
const router = require("express").Router();

router.get("/", getAllReservations)

router.get("/:id", verifyToken, getReservationByID)
router.post("/", verifyToken, createReservation)

module.exports = router;