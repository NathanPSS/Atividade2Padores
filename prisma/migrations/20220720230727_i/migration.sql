/*
  Warnings:

  - You are about to drop the `_pedidoToproduto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `produtoId` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_pedidoToproduto" DROP CONSTRAINT "_pedidoToproduto_A_fkey";

-- DropForeignKey
ALTER TABLE "_pedidoToproduto" DROP CONSTRAINT "_pedidoToproduto_B_fkey";

-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "produtoId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_pedidoToproduto";

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
