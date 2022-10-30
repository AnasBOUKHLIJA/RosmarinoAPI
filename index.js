const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


const db = require("./models");

// ROUTER
const cartRouter = require('./routes/Cart');
const reservationRouter = require('./routes/Reservation');
const commandeRouter = require('./routes/Commande');
const quantityRouter = require('./routes/Quantity');
const mailRouter = require('./routes/Mail');

app.use("/Cart",cartRouter);
app.use("/Mail",mailRouter);
app.use("/Reservation",reservationRouter);
app.use("/Command", commandeRouter);
app.use("/Quantity", quantityRouter);

db.sequelize.sync().then(() => {
app.listen(3001, () => {
    console.log("server running on port 3001");
});
});

