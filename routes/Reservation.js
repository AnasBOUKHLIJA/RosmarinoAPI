const express = require("express");
const router  = express.Router();
const {Reservations} = require("../models");
router.get("/", async (req,res) => {
    const listOfReservation = await Reservations.findAll();
    res.json(listOfReservation);
});

router.post("/", async (req,res) => {
    const reservation = req.body;
    await Reservations.create(reservation);
    res.json(reservation);
});

module.exports = router;
