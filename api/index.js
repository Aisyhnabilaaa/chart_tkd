const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Import router dari folder lain
const tkdRouter = require('../tkd/tkd.controller');
const alokasiController = require('../AlokasiTKD/alokasi.controller');
const adminController = require('../adminlogin/admin.controller');

app.get('/', (req, res) => {
  res.send('Hello from Vercel serverless Express!');
});

app.use('/api/tkd', tkdRouter);
app.use('/api/alokasi', alokasiController);
app.use('/api/admin', adminController);

// Export handler buat Vercel
module.exports.handler = serverless(app);
