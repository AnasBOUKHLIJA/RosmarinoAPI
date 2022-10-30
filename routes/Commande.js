const express = require("express");
const router  = express.Router();
const { Commandes } = require("../models");

router.get("/", async (req,res) => {
    const listOfCommande = await Commandes.findAll();
    res.json(listOfCommande);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const command = await Commandes.findByPk(id);
    res.json(command);
});

router.get("/byDate/:date", async (req, res) => {
    const date1 = req.params.date;
    const command = await Commandes.findAll({
        where: {
            date: date1
        }
    });
    res.json(command);
});

router.post("/", async (req,res) => {
    const command = req.body;
    await Commandes.create(command);
    res.json(command);
});

module.exports = router;