const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const createAlokasiTKD = async (data) => {
  const {
    tahun,
    daerah,
    dbh,
    dau,
    dakFisik,
    dakNonfisik,
    danaDesa,
    infis
  } = data;

  if (!tahun || !daerah) throw new Error('Tahun dan daerah wajib diisi');

  const total =
  new Prisma.Decimal(dbh)
    .add(new Prisma.Decimal(dau))
    .add(new Prisma.Decimal(dakFisik))
    .add(new Prisma.Decimal(dakNonfisik))
    .add(new Prisma.Decimal(danaDesa))
    .add(new Prisma.Decimal(infis));


  return await prisma.alokasiTKD.create({
    data: {
      tahun: parseInt(tahun),
      daerah,
      dbh: new Prisma.Decimal(dbh),
      dau: new Prisma.Decimal(dau),
      dakFisik: new Prisma.Decimal(dakFisik),
      dakNonfisik: new Prisma.Decimal(dakNonfisik),
      danaDesa: new Prisma.Decimal(danaDesa),
      infis: new Prisma.Decimal(infis),
      total: total
    }
  });
};

const getAlokasiChart = async (tahun) => {
  return await prisma.alokasiTKD.findMany({
    where: { tahun },
    orderBy: { daerah: 'asc' }
  });
};

module.exports = {
  createAlokasiTKD,
  getAlokasiChart
};
