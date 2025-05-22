/*
  Warnings:

  - You are about to drop the column `pemda` on the `AlokasiTKD` table. All the data in the column will be lost.
  - You are about to alter the column `dbh` on the `AlokasiTKD` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `dau` on the `AlokasiTKD` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `dakFisik` on the `AlokasiTKD` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `dakNonfisik` on the `AlokasiTKD` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `danaDesa` on the `AlokasiTKD` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `infis` on the `AlokasiTKD` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `total` on the `AlokasiTKD` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - Added the required column `daerah` to the `AlokasiTKD` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahun` to the `AlokasiTKD` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AlokasiTKD" DROP COLUMN "pemda",
ADD COLUMN     "daerah" TEXT NOT NULL,
ADD COLUMN     "tahun" INTEGER NOT NULL,
ALTER COLUMN "dbh" SET DATA TYPE BIGINT,
ALTER COLUMN "dau" SET DATA TYPE BIGINT,
ALTER COLUMN "dakFisik" SET DATA TYPE BIGINT,
ALTER COLUMN "dakNonfisik" SET DATA TYPE BIGINT,
ALTER COLUMN "danaDesa" SET DATA TYPE BIGINT,
ALTER COLUMN "infis" SET DATA TYPE BIGINT,
ALTER COLUMN "total" SET DATA TYPE BIGINT;
