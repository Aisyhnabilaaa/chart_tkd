const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Middleware otorisasi admin via API Key
function isAdmin(req, res, next) {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === process.env.ADMIN_API_KEY) {
    return next();
  } else {
    return res.status(403).json({ error: "Bukan admin!" });
  }
}



module.exports = isAdmin;