/*
  Warnings:

  - Added the required column `idPedido` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "idPedido" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_idPedido_fkey" FOREIGN KEY ("idPedido") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
