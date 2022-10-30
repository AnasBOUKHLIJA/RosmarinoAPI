const express = require("express");
const router  = express.Router();
const { Quantities } = require("../models");

router.get("/", async (req,res) => {
    const listOfQuantity = await Quantities.findAll();
    res.json(listOfQuantity);
});

router.post("/", async (req,res) => {
    const quantity = req.body;
    await Quantities.create(quantity);
    res.json(quantity);
});

module.exports = router;