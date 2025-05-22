const express = require('express')
const app = express()
app.use(express.json());

const cors = require("cors");
app.use(cors());


app.get("/", (req, res) => {
res.send('Hello there!')
})
// app.listen(3000, () => {
// console.log(`App listening on port ` + 3000)
// })

const tkdRouter = require("./tkd/tkd.controller");
app.use("/api/tkd", tkdRouter);

const alokasiController = require('./AlokasiTKD/alokasi.controller');
app.use('/api/alokasi', alokasiController);

const adminController = require('./adminlogin/admin.controller');
app.use('/api/admin', adminController);

export default app