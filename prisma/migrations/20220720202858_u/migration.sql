/*
  Warnings:

  - You are about to drop the column `name` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `quantidade` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "name",
ADD COLUMN     "quantidade" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "produtos_id_seq";
