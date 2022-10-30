const express = require("express");
const router  = express.Router();
const {Plates} = require("../models");


router.get("/", async (req,res) => {
    const listOfPlate = await Plates.findAll();
    res.json(listOfPlate);
});

router.get("/byId/:id", async (req,res) => {
    const id = req.params.id;
    const plate = await Plates.findByPk(id);
    res.json(plate);
});

router.post("/", async (req,res) => {
    const plate = req.body;
    await Plates.create(plate);
    res.json(plate);
});

module.exports = router;
