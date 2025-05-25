// const express = require('express')
// const app = express()
// app.use(express.json());

// const cors = require("cors");
// app.use(cors());


// app.get("/", (req, res) => {
// res.send('Hello there!')
// })
// // app.listen(3000, () => {
// // console.log(`App listening on port ` + 3000)
// // })

// const tkdRouter = require("./tkd/tkd.controller");
// app.use("/tkd", tkdRouter);

// const alokasiController = require('./AlokasiTKD/alokasi.controller');
// app.use('/alokasi', alokasiController);

// const adminController = require('./adminlogin/admin.controller');
// app.use('/admin', adminController);

// module.exports = app;

require("dotenv").config();

const express = require('express');
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({
  origin: 'https://charttkd-production.up.railway.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.get("/", (req, res) => {
  res.send('Hello there!');
});

const tkdRouter = require("./tkd/tkd.controller");
app.use("/tkd", tkdRouter);

const alokasiController = require('./AlokasiTKD/alokasi.controller');
app.use('/alokasi', alokasiController);

const adminController = require('./adminlogin/admin.controller');
app.use('/admin', adminController);

module.exports = app;