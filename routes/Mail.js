const express = require("express");
const router = express.Router();
const {Mails} = require("../models");

router.get("/",async (req,res) =>{
    const listOfMails = await Mails.findAl();
    res.json(listOfMails);
});

router.post("/", async (req,res) => {
    const mail = req.body;
    await Mails.create(mail);
    res.json(mail);
});

module.exports = router;