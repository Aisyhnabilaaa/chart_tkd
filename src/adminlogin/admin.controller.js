// const express = require('express');
// const router = express.Router();
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
// const { isAdmin } = require('../middleware/adminAuthorize'); // gunakan dari middleware

// const adminService = require('./admin.service')


// // Middleware otorisasi admin via API Key
// // function isAdmin(req, res, next) {
// //   const apiKey = req.headers["x-api-key"];
// //   if (apiKey === "admin_tkd@1") {
// //     next();
// //   } else {
// //     res.status(403).json({ error: "Bukan admin!" });
// //   }
// // }

// router.post('/register', async (req, res, next) => {
//   const {email, kode} = req.body
//   try{
//     const newAdmin = await adminService.register(email, kode);
//     resizeTo.status(201).json({data : {email: newAdmin.email}, message: "Registrasi sukses"})
//   } catch (error){
//     res.status(400).json({error: error.message});
//   }
// });




// // LOGIN Admin dari database
// router.post('/login', async (req, res) => {
//     const { email, kode } = req.body;
//     try {
//         const admin = await prisma.adminService.login(email, kode);
//         res.status(200).json({data: {email: admin.email, kode : admin.kode}})
//     } catch (error) {
//       res.status(400).json({error: error.message})

//     }

//   //   console.log('Received login request:', { email, kode });

//   //   const admin = await prisma.admin.findUnique({ where: { email } });

//   //   if (!admin) {
//   //     console.log('Admin not found:', email);
//   //     return res.status(401).json({ message: 'Email tidak terdaftar' });
//   //   }

//   //   console.log('Admin found:', admin);

//   //   if (kode !== admin.kode) {
//   //     console.log('Incorrect verification code for:', email);
//   //     return res.status(401).json({ message: 'Kode verifikasi salah' });
//   //   }

//   //   console.log('Login successful for:', email);
//   //   res.status(200).json({ message: 'Login berhasil' });
// });

// // UBAH KODE Admin
// router.put('/ubah-kode', isAdmin, async (req, res) => {
//   const { email, kodeLama, kodeBaru } = req.body;

//   const admin = await prisma.admin.findUnique({ where: { email } });

//   if (!admin || admin.kode !== kodeLama) {
//     return res.status(401).json({ message: 'Email atau kode lama salah' });
//   }

//   await prisma.admin.update({
//     where: { email },
//     data: { kode: kodeBaru }
//   });

//   res.status(200).json({ message: 'Kode berhasil diubah' });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const  isAdmin = require('../middleware/adminAuthorize'); // Middleware otorisasi admin

const adminService = require('./admin.service');

// Registrasi Admin
router.post('/register', async (req, res) => {
  const { email, kode } = req.body;
  try {
    const newAdmin = await adminService.register(email, kode);
    res.status(201).json({ data: { email: newAdmin.email }, message: "Registrasi sukses" });
  } catch (error) {
    console.log('apa yang error', error)
    res.status(400).json({ error: error.message });
  }
});

// LOGIN Admin
router.post('/login', async (req, res) => {
  const { email, kode } = req.body;
  try {
    const admin = await adminService.login(email, kode);
    res.status(200).json({ data: { email: admin.email } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ubah Kata Sandi Admin
router.put('/change-password', isAdmin, async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  try {
    const updatedAdmin = await adminService.changePassword(email, oldPassword, newPassword);
    res.status(200).json({ message: 'Kata sandi berhasil diubah', admin: { email: updatedAdmin.email } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// LOGOUT Admin
router.post('/logout', (req, res) => {
  // Logika logout, seperti menghapus sesi atau token
  // Jika menggunakan token, Anda bisa mengabaikan token di sisi klien
  res.status(200).json({ message: 'Logout berhasil' });
});

module.exports = router;