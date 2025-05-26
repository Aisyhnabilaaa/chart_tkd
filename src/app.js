const express = require('express')
const app = express()
app.use(express.json());

const cors = require("cors");
app.use(cors());


app.get("/", (req, res) => {
res.send('Hello there!')
})
app.listen(3000, () => {
console.log(`App listening on port ` + 3000)
})

// Import routes after basic middleware
const tkdRouter = require("./tkd/tkd.controller");
console.log("Loaded tkdRouter");
app.use("/tkd", tkdRouter);

const alokasiController = require('./AlokasiTKD/alokasi.controller');
console.log("Loaded alokasiController");
app.use('/alokasi', alokasiController);

const adminController = require('./adminlogin/admin.controller');
console.log("Loaded adminController");
app.use('/admin', adminController);
