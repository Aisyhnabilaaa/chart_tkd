const prisma = require('../db')

async function insertAlokasiTKD(data) {
  return await prisma.alokasiTKD.create({ data })
}

async function findAlokasiByTahun(tahun) {
  return await prisma.alokasiTKD.findMany({
    where: { tahun: parseInt(tahun) },
    orderBy: { daerah: 'asc' }
  })
}

module.exports = { insertAlokasiTKD, findAlokasiByTahun }