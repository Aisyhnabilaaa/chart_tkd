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
// app.use("/api/tkd", tkdRouter);

// const alokasiController = require('./AlokasiTKD/alokasi.controller');
// app.use('/api/alokasi', alokasiController);

// const adminController = require('./adminlogin/admin.controller');
// app.use('/api/admin', adminController);

// // export default app

// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send('Hello there!');
// });

// const tkdRouter = require("./tkd/tkd.controller");
// app.use("/api/tkd", tkdRouter);

// const alokasiController = require('./AlokasiTKD/alokasi.controller');
// app.use('/api/alokasi', alokasiController);

// const adminController = require('./adminlogin/admin.controller');
// app.use('/api/admin', adminController);

// module.exports = app;

import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello there!");
});

import tkdRouter from './tkd/tkd.controller.js';
app.use("/api/tkd", tkdRouter);

import alokasiController from './AlokasiTKD/alokasi.controller.js';
app.use("/api/alokasi", alokasiController);

import adminController from './adminlogin/admin.controller.js';
app.use("/api/admin", adminController);

export default app;

