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

const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
  "https://tkdkppnpalu-production.up.railway.app",
  "https://adminkppnpalu-production.up.railway.app"
];

const corsOptions = {
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // <-- Penting untuk preflight

app.use(express.json());

// Route admin
app.post('/admin/login', (req, res) => {
  // login logic
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));
